package project.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.data.UserRepository;
import project.model.user.SecurityUser;
import project.security.TokenUtils;
import project.web.dto.LoginDTO;
import project.web.dto.TokenDTO;

@RestController
public class UserController {

	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	TokenUtils tokenUtils;
	
	@RequestMapping(value = "/api/login", method = RequestMethod.POST)
	public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) {
        try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					loginDTO.getUsername(), loginDTO.getPassword());
            Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
            String genToken = tokenUtils.generateToken(details);
            return new ResponseEntity<TokenDTO>(new TokenDTO(genToken), 
            		HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<TokenDTO>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
        }
	}
	
	@PreAuthorize("isAuthenticated()")
	@PutMapping("/api/cart") // /api/cart?articleId=123
	ResponseEntity teststuff(
			@AuthenticationPrincipal UserDetails principal,
			@RequestParam long articleId
			) {
//		SecurityContextHolder.getContext().getAuthentication().getName();
		SecurityUser user = userRepository.findByUsername(principal.getUsername());
		
		// Atrikal artikal = artikalService.findById(articleId);
		// Korpa korpa = korpaService.findByUser(user);
		
		// korpa.addArtikal(artikal);
		// korpaService.save(korpa);

		return new ResponseEntity<>(HttpStatus.OK);
	}
}





