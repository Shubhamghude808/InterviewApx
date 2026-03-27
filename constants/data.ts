export const data = {
  java: [
  {
    question: "Is Java platform independent?",
    answer: "Yes. Java is a platform-independent language. We can write Java code on one platform (source code) and run the compiled bytecode on any other platform with a JVM (Java Virtual Machine)."
  },
  {
    question: "What is class?",
    answer: "A class is a blueprint or template that describes the data (fields) and behavior (methods) associated with objects created from that class."
  },
  {
    question: "What is Access Modifiers in Java?",
    answer: "Access Modifiers set the visibility levels for classes, methods, and variables. There are four types: public, private, protected, and 'default' (used when no keyword is specified, making it package-private)."
  },
  {
    question: "What are local variables in Java?",
    answer: "Variables declared inside a block, method, or constructor are local variables; they must be initialized before use and exist only while the method is executing."
  },
  {
    question: "What are instance variable in Java?",
    answer: "Variables declared at the class level outside any method are instance variables; they are created when an object is instantiated and each object has its own copy."
  },
  {
    question: "What are static variable in Java?",
    answer: "Static or Class variables are declared with the static keyword; they are shared across all instances of the class and belong to the class rather than an object."
  },
  {
    question: "What if the main method is declared as private?",
    answer: "The code will compile without errors, but at runtime, the JVM will throw a 'Main method not found' error because it cannot access a private method to start execution."
  },
  {
    question: "In System.out.println(), what is System, out and println?",
    answer: "System is a final class in java.lang, out is a static member of the System class of type PrintStream, and println is an overloaded method of the PrintStream class."
  },
  {
    question: "What if I write static public void instead of public static void?",
    answer: "The program will compile and run perfectly; the order of access modifiers and the static keyword does not matter, though 'public static' is the standard convention."
  },
  {
    question: "Why main method is static in Java?",
    answer: "It allows the JVM to call the method directly using the Class name without having to instantiate the class, saving memory and avoiding constructor-related issues at startup."
  },
  {
    question: "Why main method is public in Java?",
    answer: "It must be public so that the JVM (which resides outside the package of your class) has the visibility required to execute the program entry point."
  },
  {
    question: "What is the base or super class of all classes?",
    answer: "The java.lang.Object class is the root of the class hierarchy; every class in Java inherits from Object, either directly or indirectly."
  },
  {
    question: "What is Java Package?",
    answer: "A package is a namespace that organizes a set of related classes and interfaces, helping to prevent naming conflicts and control access."
  },
  {
    question: "What are the primitive data types?",
    answer: "There are eight: byte, short, int, long, float, double, boolean, and char. Note that String is a Class/Object, not a primitive."
  },
  {
    question: "What is difference between wait and sleep?",
    answer: "sleep() is a static Thread method that pauses the current thread without releasing locks; wait() is an Object method used for inter-thread communication that releases the lock until notified."
  },
  {
    question: "What is Encapsulation?",
    answer: "The technique of bundling data (variables) and the methods that act on that data into a single unit (class) and restricting direct access to some components (using private)."
  },
  {
    question: "What is Polymorphism and what are the types of it?",
    answer: "The ability of a single action to perform in different ways. Types include Compile-time polymorphism (Method Overloading) and Runtime polymorphism (Method Overriding)."
  },
  {
    question: "What is inheritance?",
    answer: "A mechanism where one class (subclass) inherits the fields and methods of another (superclass), facilitating code reusability and an 'IS-A' relationship."
  },
  {
    question: "Does Java support Multiple Inheritances?",
    answer: "Java does not support multiple inheritance with classes to avoid the 'Diamond Problem'; however, it is supported through Interfaces."
  },
  {
    question: "What is Abstract class?",
    answer: "A class declared with the 'abstract' keyword that cannot be instantiated. It can contain both abstract methods (without bodies) and concrete methods."
  },
  {
    question: "What is Garbage collection?",
    answer: "An automatic memory management process in Java that identifies and deletes objects that are no longer reachable or referenced to free up heap space."
  },
  {
    question: "What is Constructor?",
    answer: "A special block of code used to initialize a newly created object. It has no return type and must have the same name as the class."
  },
  {
    question: "What is method overloading in java?",
    answer: "Defining multiple methods in the same class with the same name but different signatures (different number, type, or order of parameters)."
  },
  {
    question: "What is method overriding in Java?",
    answer: "When a subclass provides a specific implementation for a method already provided by its parent class, using the exact same name, return type, and parameters."
  },
  {
    question: "Difference between method overloading and overriding?",
    answer: "Overloading is for compile-time (static) polymorphism in the same class; Overriding is for runtime (dynamic) polymorphism in a parent-child relationship."
  },
  {
    question: "Is it possible to overload main() method of a class?",
    answer: "Yes, you can have multiple main methods with different parameters, but the JVM will only execute the standard 'public static void main(String[] args)' as the entry point."
  },
  {
    question: "Can we override a static method?",
    answer: "No. If you declare a static method with the same signature in a subclass, it is called 'Method Hiding,' not overriding, because static methods are bound to the class."
  },
  {
    question: "Can we override java main method?",
    answer: "No, because the main method is static, and static methods are resolved at compile-time by the class type rather than at runtime by the object instance."
  },
  {
    question: "Can you override private or static method in Java?",
    answer: "No. Private methods are not visible to subclasses, and static methods belong to the class level, making overriding (which relies on dynamic dispatch) impossible."
  },
  {
    question: "What is a List interface in Java?",
    answer: "An ordered Collection (also known as a sequence) that allows positional access and the insertion of duplicate elements."
  },
  {
    question: "What is a Set interface in Java?",
    answer: "A Collection that cannot contain duplicate elements. It models the mathematical set abstraction (e.g., HashSet, TreeSet)."
  },
  {
    question: "What is difference between List and Set?",
    answer: "List is an ordered collection that allows duplicates; Set is an unordered collection (usually) that prohibits duplicate elements."
  },
  {
    question: "What is a Map interface in Java?",
    answer: "An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value."
  },
  {
    question: "What is difference between Arrays and ArrayList?",
    answer: "Arrays have a fixed size and can hold primitives or objects; ArrayList is a dynamic-sized class that can only store objects (though it uses autoboxing for primitives)."
  },
  {
    question: "What is difference between Interface and Abstract Class?",
    answer: "Abstract classes can have instance variables and constructors; Interfaces (pre-Java 8) were purely abstract. Now, interfaces can have default/static methods but still cannot hold state (instance variables)."
  },
  {
    question: "What is this keyword?",
    answer: "A reference variable that refers to the current object instance. It is commonly used to resolve ambiguity between instance variables and parameters."
  },
  {
    question: "What is the difference between final, finally and finalize in Java?",
    answer: "final is a modifier (for constants/non-overridable methods); finally is a block used for exception cleanup; finalize is a method called by the GC before object destruction (now deprecated)."
  },
  {
    question: "What is JDBC?",
    answer: "Java Database Connectivity (JDBC) is a Java API that manages connecting to a database, issuing queries/commands, and handling result sets."
  },
  {
    question: "What is the difference between Collection and Collections?",
    answer: "Collection is the root interface of the framework; Collections is a utility class consisting of static methods that operate on or return collections (like sort or reverse)."
  },
  {
    question: "What is an Exception?",
    answer: "An event that occurs during the execution of a program that disrupts the normal flow of instructions; it is an object which is thrown at runtime."
  },
  {
    question: "What is difference between an exception and an error?",
    answer: "Exceptions are conditions that a reasonable application might want to catch (recoverable); Errors indicate serious problems that an application should not try to catch (unrecoverable)."
  },
  {
    question: "Exceptions are defined in which java package?",
    answer: "The base classes Throwable, Error, and Exception are in java.lang, but many specific exceptions are found in java.io, java.util, and java.sql."
  },
  {
    question: "Explain about Java Exception Hierarchy?",
    answer: "Throwable is the root. It has two main subclasses: Error and Exception. Exception is further divided into Checked Exceptions and Unchecked (Runtime) Exceptions."
  },
  {
    question: "Explain about various types of Exceptions & Errors in Java?",
    answer: "Examples include Checked (IOException, SQLException), Unchecked (NullPointerException, ArithmeticException), and Errors (OutOfMemoryError, StackOverflowError)."
  },
  {
    question: "What is difference between Checked and Unchecked Exception in Java?",
    answer: "Checked exceptions are checked at compile-time and must be handled or declared; Unchecked exceptions happen at runtime and are usually the result of programming logic errors."
  },
  {
    question: "What are Java Exception Handling Keywords?",
    answer: "The five keywords are: try (defines block to monitor), catch (handles exception), finally (executes regardless), throw (throws manually), and throws (declares in signature)."
  },
  {
    question: "What is difference between throw and throws keyword in Java?",
    answer: "throw is used within a method body to actually trigger an exception; throws is used in a method header to signal that this method might result in specific exceptions."
  },
  {
    question: "What is difference between ClassNotFoundException and NoClassDefFoundError?",
    answer: "ClassNotFoundException occurs when you try to load a class at runtime using reflection and it isn't found; NoClassDefFoundError occurs when the class was present during compilation but is missing at runtime."
  }
],

  git: [
    {
      question: "What is Git?",
      answer: "Git is a version control system."
    }
  ],

  testng: [
    {
      question: "What is TestNG?",
      answer: "TestNG is a testing framework."
    }
  ]




};