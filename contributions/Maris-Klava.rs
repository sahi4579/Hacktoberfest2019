use std::{thread, time};
use std::io::stdout;
use std::io::Write;

//custom print function
fn printType(text: &str) {
    let ms = time::Duration::from_millis(50);
    let ms_long = time::Duration::from_millis(500);

    for i in 0..text.len() {
        let achar = text.chars().nth(i).unwrap();
        if achar == '~' {
            thread::sleep(ms_long);
            continue;
        }
        print!("{}", achar);
        stdout().flush().unwrap();
        thread::sleep(ms);

    }
    print!("\n")
}

fn main() {

    //clear the screen
    print!("{}[2J", 27 as char);

    //content
    printType("~Hello, ~my name is Maris, ~I am a programmer from Riga, Latvia");
    printType("and write a lot of projects in my spare time.~\n~");

    printType("~Programming has been my passion for ages,~ A friend really got me into");
    printType("it when I was about 12 years old. ~My first language was C++, ~it");
    printType("never felt right for me, ~so I started looking at other languages pretty fast.~\n~");

    printType("~Rust is a very natural language for me, ~I've grown to");
    printType("use it for almost any project that requires functional and fast code, ~");
    printType("especially with the recent announcement of stable async.~\n~");

    printType("~I'm still learning a lot about other languages and programming");
    printType("in general, ~my new goal is to learn Python to the point of profficiency, ~");
    printType("possibly even experiment with some AI stuff.~\n~");

    printType("~https://github.com/marksklava")
}
