package pl.kskowronski.springlibraryapp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.kskowronski.springlibraryapp.dao.models.Book;

@Repository
public interface LibraryRepo extends CrudRepository<Book,Long> {
}
