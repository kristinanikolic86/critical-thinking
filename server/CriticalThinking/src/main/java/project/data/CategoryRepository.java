package project.data;

import org.springframework.data.jpa.repository.JpaRepository;

import project.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	public Category findById (Long id);

	public Category findByName(String name);
}
