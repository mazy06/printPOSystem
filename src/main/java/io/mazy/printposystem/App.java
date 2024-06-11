package io.mazy.printposystem;

import java.util.Objects;
import java.util.logging.Logger;

public class App {

    private final static Logger log;

    // config logger
    static {
        String path = Objects.requireNonNull(App.class.getClassLoader()
                        .getResource("src/main/resources/logging.properties"))
                .getFile();

        System.setProperty("java.util.logging.config.file", path);

        log = Logger.getLogger(App.class.getName());
    }



    public static void main(String[] args) {

        log.info("-- main method start --");

        SocketServer socketServer = new SocketServer();
        socketServer.start(6666);


    }

}
