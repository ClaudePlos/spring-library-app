package pl.kskowronski.springlibraryapp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.kskowronski.springlibraryapp.dao.LibraryRepo;
import pl.kskowronski.springlibraryapp.dao.models.Book;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class LibraryManager {

    private LibraryRepo libraryRepo;

    @Autowired
    public LibraryManager(LibraryRepo libraryRepo) {
        this.libraryRepo = libraryRepo;
    }

    public Optional<Book> findById(Long id) {
        return libraryRepo.findById(id);
    }

    public Iterable<Book> findAll() {
        return libraryRepo.findAll();
    }

    public Book save(Book book) {
        return libraryRepo.save(book);
    }

    public void deleteById(Long id) {
        libraryRepo.deleteById(id);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB() {
        save(new Book(1L,"Secret of you", LocalDate.of(2008,1,1)));
        save(new Book(2L,"Big City Life", LocalDate.of(1995,2,1)));
    }
}