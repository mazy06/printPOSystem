package io.mazy.printposystem;

import com.github.anastaciocintra.escpos.EscPos;
import com.github.anastaciocintra.output.PrinterOutputStream;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.print.PrintService;
import java.io.IOException;

@SpringBootApplication
public class PrintPoSystemApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(PrintPoSystemApplication.class, args);
    }

}
