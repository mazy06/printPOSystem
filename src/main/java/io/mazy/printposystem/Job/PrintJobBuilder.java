package io.mazy.printposystem.Job;

import org.cups4j.PrintJob;

public class PrintJobBuilder {
    private String textContent;

    public PrintJobBuilder text(String textContent) {
        this.textContent = textContent;
        return this;
    }

    public PrintJob build() {
        return new PrintJob.Builder(textContent.getBytes()).build();
    }
}


