package pl.kskowronski.springlibraryapp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.kskowronski.springlibraryapp.dao.models.Book;

import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class LibraryRestApi {

//    private List<Book> books;
//
//    public LibraryRestApi() {
//        this.books = new ArrayList<>();
//        this.books.add(new Book(1L,"Secret of you", LocalDate.of(2008,1,1)));
//        this.books.add(new Book(2L,"Big City Life", LocalDate.of(1995,2,1)));
//    }

    private LibraryManager libraryManager;

    @Autowired
    public LibraryRestApi(LibraryManager libraryManager) {
        this.libraryManager = libraryManager;
    }

    @GetMapping("/all")
    public Iterable<Book> findAll(){
        return libraryManager.findAll();
        //return books;
    }


    @GetMapping
    public Optional<Book> getById(@RequestParam Long id){
//        Optional<Book> first = books.stream()
//                .filter(element -> element.getId() == index).findFirst();
//        return first.get();
        return libraryManager.findById(id);
    }

    @PostMapping
    public Book addBook(@RequestBody Book book){
        return libraryManager.save(book);
    }

    @PutMapping
    public Book updaateBook(@RequestBody Book book){
        return libraryManager.save(book);
        //return books.add(book);
    }

    @DeleteMapping
    public void deleteBook(@RequestParam Long id){
        libraryManager.deleteById(id);
        //return books.removeIf(element -> element.getId() == index);
    }

}
