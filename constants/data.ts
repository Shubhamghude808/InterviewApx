export const data = 
{
  "Java Jitters": 
  [
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


  "Playwright Panic":[
  {
    question: "Playwright: Fast, Furious, and Still Failing on CI",
    answer: "Playwright TypeScript Interview Cheat Sheet\nA quick recap of essential Playwright concepts, locators, actions, and assertions for interview preparation.\n\n1. Test Structure & Hooks\nEvery Playwright test file imports the test and expect modules. You can group tests and run setup/teardown code using hooks in TypeScript.\n\nimport { test, expect, type Page } from '@playwright/test';\n\ntest.describe('Test Suite Name', () => {\n  test.beforeAll(async () => { /* Runs once before all tests */ });\n  test.beforeEach(async ({ page }: { page: Page }) => { /* Runs before each test */ });\n  test.afterEach(async ({ page }: { page: Page }) => { /* Runs after each test */ });\n  test.afterAll(async () => { /* Runs once after all tests */ });\n\n  test('Test Case Name', async ({ page }: { page: Page }) => {\n    // Test logic goes here\n  });\n});\n\n2. Navigation\nCommands to move through the browser history and load URLs.\n\nNavigate to URL: await page.goto('https://example.com');\nReload page: await page.reload();\nGo back: await page.goBack();\nGo forward: await page.goForward();\n\n3. Locators\nPlaywright recommends using user-facing locators (getBy...) over CSS/XPath whenever possible for better resilience.\n\nBy Role: page.getByRole('button', { name: 'Submit' })\nBy Text: page.getByText('Welcome, User')\nBy Label: page.getByLabel('Password')\nBy Placeholder: page.getByPlaceholder('Enter email')\nBy Test ID: page.getByTestId('submit-btn')\nBy CSS Selector: page.locator('.class-name > #id')\nBy XPath: page.locator('//button[text()=\"Submit\"]')\nChaining Locators: page.locator('#form').getByRole('button')\n\n4. Actions\nInteracting with the elements you have located. Playwright automatically waits for elements to be actionable (visible, enabled, stable) before performing these.\n\nClick: await page.locator('#btn').click();\nDouble Click: await page.locator('#btn').dblclick();\nRight Click: await page.locator('#btn').click({ button: 'right' });\nType text (simulates keystrokes): await page.locator('#input').pressSequentially('Hello'); // Note: type() is deprecated in favor of pressSequentially\nFill text (clears and fills instantly): await page.locator('#input').fill('Hello');\nPress a keyboard key: await page.locator('#input').press('Enter');\nCheck/Uncheck a checkbox/radio: await page.locator('#checkbox').check(); / await page.locator('#checkbox').uncheck();\nSelect Dropdown Option:\n* By value: await page.locator('#dropdown').selectOption('value1');\n* By label: await page.locator('#dropdown').selectOption({ label: 'Option 1' });\nHover: await page.locator('#menu').hover();\nFocus: await page.locator('#input').focus();\n\n5. Assertions\nPlaywright uses the expect library. Assertions will auto-retry until the condition is met or the timeout is reached.\n\nCheck Visibility: await expect(page.locator('#logo')).toBeVisible(); / toBeHidden();\nCheck Text: await expect(page.locator('.title')).toHaveText('Exact Text');\nCheck Partial Text: await expect(page.locator('.title')).toContainText('Partial');\nCheck Value (Input fields): await expect(page.locator('#email')).toHaveValue('test@test.com');\nCheck Element Count: await expect(page.locator('li')).toHaveCount(5);\nCheck State:\n* await expect(page.locator('#btn')).toBeEnabled(); / toBeDisabled();\n* await expect(page.locator('#checkbox')).toBeChecked();\nCheck URL/Title:\n* await expect(page).toHaveURL(/.*dashboard/);\n* await expect(page).toHaveTitle('Dashboard');\nSoft Assertions (Fails the test at the end, but continues execution): expect.soft(page.locator('#logo')).toBeVisible();\n\n6. Advanced Interactions\n\nHandling Dialogs (Alerts, Prompts, Confirms)\nDialogs are auto-dismissed by default. You must attach a listener before triggering them.\n\npage.on('dialog', dialog => dialog.accept('Prompt text input')); // or dialog.dismiss()\nawait page.locator('#trigger-alert').click();\n\nHandling iFrames\nYou must locate the frame first, then query elements inside it.\n\nconst frame = page.frameLocator('#iframe-id');\nawait frame.locator('#btn-inside-frame').click();\n\nHandling Multiple Tabs/Windows\nWhen clicking a link opens a new tab, you must wait for the new page event.\n\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.locator('a[target=\"_blank\"]').click() // Action that opens the tab\n]);\nawait newPage.waitForLoadState();\nawait expect(newPage).toHaveTitle('New Tab Title');\n\nDrag and Drop\nawait page.locator('#source').dragTo(page.locator('#target'));\n\nFile Upload & Download\n// Upload\nawait page.locator('input[type=\"file\"]').setInputFiles('path/to/file.pdf');\n\n// Download\nconst downloadPromise = page.waitForEvent('download');\nawait page.locator('#download-btn').click();\nconst download = await downloadPromise;\nawait download.saveAs('/path/to/save/' + download.suggestedFilename());\n\n7. Useful CLI Commands\nFor executing and debugging tests from the terminal.\n\nRun all tests: npx playwright test\nRun a specific file: npx playwright test tests/login.spec.ts\nRun in headed mode (visible browser): npx playwright test --headed\nRun in UI mode (Interactive visual runner): npx playwright test --ui\nRun with Debugger: npx playwright test --debug\nShow HTML Report: npx playwright show-report\nGenerate Code (Record test): npx playwright codegen https://example.com"
  },
  {
    question: "What is Playwright?",
    answer: "Playwright is an open-source testing tool managed by Microsoft that supports functional, API, and component testing across modern web browsers."
  },
  {
    question: "What is the difference between Selenium and Playwright?",
    answer: "Playwright is a ready-to-use framework with built-in assertions and automatic waiting, while Selenium provides APIs requiring external libraries like JUnit for assertions. Playwright communicates via WebSockets for faster execution compared to Selenium's HTTP-based WebDriver API. Additionally, Playwright uses the open-source WebKit engine for Safari testing, whereas Selenium supports the stock Safari browser."
  },
  {
    question: "What are the advantages of Playwright?",
    answer: "Playwright is easy to install, supports multiple languages (Java, Python, C#, TS, JS), and handles both API and end-to-end testing. It features native auto-waiting, network traffic control for mocking, and simplified handling of edge cases like file uploads and downloads without needing external drivers."
  },
  {
    question: "Name some disadvantages of Playwright.",
    answer: "Playwright currently lacks support for native mobile app automation, legacy Internet Explorer, and the stock Safari browser. Some CI tools like TeamCity require manual configuration, and certain test-ordering features found in TestNG are not yet natively available."
  },
  {
    question: "What testing types does Playwright support?",
    answer: "Playwright supports functional testing, API testing, and component-level testing."
  },
  {
    question: "What programming languages does Playwright support?",
    answer: "Playwright officially supports Java, Python, .NET C#, TypeScript, and JavaScript, with the TypeScript/JavaScript version being the most widely used and stable."
  },
  {
    question: "What are the commands for Playwright installation and execution?",
    answer: "After installing NodeJS, use 'npm init playwright@latest' to install the package and configurations. To execute tests, use the command 'npx playwright test', which runs all tests in the project by default."
  },
  {
    question: "What is the Configuration File in Playwright?",
    answer: "The configuration file, typically 'playwright.config.ts', is where you define execution behavior such as headless mode, viewport size, screenshots, baseURL, and browser specific options."
  },
  {
    question: "What is the @playwright/test package?",
    answer: "While Playwright can work with runners like Mocha or Jest, '@playwright/test' is the native, default test runner designed specifically for Playwright's ecosystem."
  },
  {
    question: "What is the Page class in Playwright?",
    answer: "The Page class is the main interface used to interact with a browser tab. It provides methods for navigation, element interaction, and event handling."
  },
  {
    question: "How do you navigate to a specific URL in Playwright?",
    answer: "You use 'await page.goto(URL)' within a test function. Related tests are typically grouped using 'test.describe', while 'test()' contains the actual test logic."
  },
  {
    question: "What types of reporters does Playwright support?",
    answer: "Playwright supports Dot, Line, HTML, JSON, and JUnit reporters natively. It also allows for Custom reporters and third-party integrations like Allure."
  },
  {
    question: "What are Locators and name five examples?",
    answer: "Locators are used to find elements uniquely. Examples include getByText(), getByRole(), getByLabel(), getByTestId(), and getByTitle(). You can also use the generic locator() for CSS or XPath."
  },
  {
    question: "What text selectors are available in Playwright?",
    answer: "Playwright offers several text-based selectors: the generic 'text=' locator for partial matches, the ':text-is()' pseudo-class for exact matches, and the ':has-text()' pseudo-class to find elements containing specific text."
  },
  {
    question: "How do you use assertions in Playwright?",
    answer: "Playwright uses the Jest 'expect' library. Common assertions include toBeVisible() to check visibility, toContainText() for text validation, toHaveClass() for CSS classes, toHaveCount() for element frequency, and toHaveTitle() for page title verification."
  },
  {
    question: "What are soft assertions in Playwright?",
    answer: "Soft assertions, used via 'expect.soft()', do not terminate the test execution upon failure. Instead, they allow the test to continue and mark the test as failed only at the very end."
  },
  {
    question: "How do you negate assertions in Playwright?",
    answer: "You use the '.not' keyword before a matcher to verify negative conditions, such as 'expect(value).not.toBe(target)'."
  },
  {
    question: "Does Playwright support XPath?",
    answer: "Yes, Playwright automatically detects XPath if a selector starts with '//' or '..'. You can use these within 'page.locator()' to find elements."
  },
  {
    question: "What are the common Playwright command line options?",
    answer: "Useful CLI options include '--headed' to see the browser, '--browser' to specify chromium/firefox/webkit, '--retries' to set retry attempts, and '--grep' to filter tests by name."
  },
  {
    question: "What is the difference between headed and headless mode?",
    answer: "Headed mode opens a visible browser window for visual debugging. Headless mode runs in the background without a UI, which is faster and better suited for automated CI/CD pipelines."
  },
  {
    question: "How do you generate HTML reports?",
    answer: "You can generate an HTML report by running 'npx playwright test --reporter=html', which creates a viewable summary of test results."
  },
  {
    question: "What are the different types of Timeouts in Playwright?",
    answer: "Playwright uses several timeout levels: Test timeout for the whole test, Expect timeout for assertions, Action timeout for interactions like clicks, Navigation timeout for page loads, and Global timeout for the entire run."
  },
  {
    question: "How do you navigate forward and backward?",
    answer: "Use 'page.goForward()' and 'page.goBack()' to move through the browser's session history."
  },
  {
    question: "How do you perform actions like a click?",
    answer: "First, locate the element using a locator strategy, then call the action method, such as 'await page.locator('#id').click()'."
  },
  {
    question: "Does Playwright support the Safari browser?",
    answer: "Playwright does not support the native stock Safari browser. Instead, it supports WebKit, which is the open-source engine that powers Safari, ensuring consistent behavior across macOS and other systems."
  },
  {
    question: "How do you wait for a specific element?",
    answer: "While Playwright auto-waits, you can explicitly wait using 'locator.waitFor()'. You can specify states such as 'attached', 'detached', 'visible', or 'hidden'."
  },
  {
    question: "What is a Browser Context?",
    answer: "A Browser Context is an isolated, incognito-like session within a browser instance. It allows for multiple independent sessions (like different user logins) to run simultaneously without interference."
  },
  {
    question: "How do you open multiple windows/pages?",
    answer: "Within a context, you can create multiple pages using 'await context.newPage()', which allows you to interact with multiple tabs or windows at once."
  },
  {
    question: "How do you handle iFrames?",
    answer: "Use 'page.frameLocator(selector)' to target an iFrame. This returns a locator that allows you to interact with elements inside that specific frame."
  },
  {
    question: "What options are available for click actions?",
    answer: "The click method supports several options: 'force' to bypass actionability checks, 'position' to click specific coordinates, and 'delay' to wait between mousedown and mouseup."
  },
  {
    question: "How do you perform a right-click?",
    answer: "There is no dedicated right-click command; instead, use 'locator.click({ button: 'right' })'."
  },
  {
    question: "How do you evaluate Javascript in the browser?",
    answer: "Use 'page.evaluate()' to run custom JavaScript code directly within the page context, which is useful for retrieving DOM properties not exposed by the API."
  },
  {
    question: "What are Playwright fixtures?",
    answer: "Fixtures are isolated environments for each test, such as 'page' or 'browser'. They ensure test independence and can be customized to share setup logic across multiple tests."
  },
  {
    question: "What is CodeGen in Playwright?",
    answer: "CodeGen is a built-in tool that records your interactions in a browser and automatically generates the corresponding Playwright test code."
  },
  {
    question: "How do you parameterize tests?",
    answer: "Parameterization (data-driven testing) is achieved by wrapping your 'test()' blocks inside a loop (like 'for...of') using data from arrays, JSON, or CSV files."
  },
  {
    question: "How do you upload files?",
    answer: "Use 'setInputFiles()' on a file input element. You can pass a single file path, an array for multiple files, or an empty array to clear current selections."
  },
  {
    question: "How do you download files?",
    answer: "Downloads are handled by awaiting 'page.waitForEvent('download')' simultaneously with the action that triggers the download. You can then use 'download.path()' to locate the file."
  },
  {
    question: "How do you perform drag and drop?",
    answer: "You can use the 'locator.dragTo()' method for a simple action, or manually perform it using a sequence of 'hover()', 'mouse.down()', moving to the target, and 'mouse.up()'."
  },
  {
    question: "How do you handle browser popups or dialogs?",
    answer: "Since dialogs (alerts, prompts) are native, you handle them using 'page.on('dialog', dialog => ...)' listeners where you can call 'dialog.accept()' or 'dialog.dismiss()'."
  },
  {
    question: "What are the testInfo and testError objects?",
    answer: "The 'testInfo' object contains metadata about the current test run (duration, status, etc.), while 'testError' provides specific details about failures, such as the error message and stack trace."
  },
  {
    question: "What are global setup and teardown?",
    answer: "Global setup is a function that runs once before all tests (e.g., for database seeding), and global teardown runs once after all tests are finished (e.g., for report generation or cleanup)."
  },
  {
    question: "How do you capture Network logs?",
    answer: "You can monitor network activity using 'page.on('request')' and 'page.on('response')' listeners to log methods, URLs, and status codes during execution."
  },
  {
    question: "How do you capture screenshots?",
    answer: "Use 'page.screenshot()' for a viewport capture, add '{ fullPage: true }' for the entire page, or call '.screenshot()' on a specific locator for an element-level image."
  },
  {
    question: "Does Playwright support API testing?",
    answer: "Yes, Playwright includes a 'request' fixture that allows you to send HTTP requests (GET, POST, etc.) and validate responses directly within your test suite."
  },
  {
    question: "What is Visual Testing?",
    answer: "Visual testing compares a current screenshot against a baseline image to detect UI regressions like font changes or alignment shifts that functional tests might miss."
  },
  {
    question: "How do you perform a visual test?",
    answer: "Use 'expect(page).toHaveScreenshot()'. On the first run, Playwright saves a base image; on subsequent runs, it compares the new screen against that base."
  },
  {
    question: "How do you configure multiple reporters?",
    answer: "In the config file, you can pass an array to the 'reporter' property, listing multiple types such as 'list', 'html', and 'json' simultaneously."
  },
  {
    question: "What is Serial Mode?",
    answer: "Serial mode, configured via 'mode: serial', ensures tests in a group run one after another. If one fails, the subsequent tests are skipped, which is useful for inter-dependent test steps."
  },
  {
    question: "How do you perform parallel execution?",
    answer: "Parallelism can be set at the file level using 'test.describe.configure({ mode: 'parallel' })' or globally in the config file using the 'fullyParallel: true' option."
  },
  {
    question: "How do you perform mobile device emulation?",
    answer: "In the config file, you can define projects that use 'devices' from Playwright to emulate specific hardware, screen sizes, and user agents like 'iPhone 12'."
  },
  {
    question: "How can you debug Playwright tests?",
    answer: "You can debug using the '--debug' CLI flag, the Playwright VSCode extension, enabling 'trace: on' in the config, or using 'page.pause()' within the test code."
  },
  {
    question: "What is Actionability in Playwright?",
    answer: "Actionability is a set of automatic checks Playwright performs before any action (like a click), ensuring the element is attached, visible, stable, enabled, and ready to receive events."
  },
  {
    question: "What are the advantages of Playwright over Cypress?",
    answer: "Playwright supports multiple tabs/windows, native iFrame handling, and cross-domain testing, all of which are limitations in Cypress. It also supports multiple languages and the Safari WebKit engine."
  }
],

  "Git Happens: The 'Oh No, What Did I Just Delete?' Survival Guide": [
   {
    question: "Git quick recap of essential Git commands",
    answer: " \n1. Setup & Configuration\nSet your username and email (attached to your commits):\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\nCheck configuration: git config --list\n\n2. Starting a Project\nInitialize a new local repository: git init\nClone an existing remote repository: git clone <url>\n\n3. Basic Workflow (Staging & Committing)\nCheck the state of your working directory: git status\nAdd a specific file to staging area: git add <file>\nAdd all changed files to staging area: git add .\nCommit staged changes with a message: git commit -m \"Commit message\"\nModify the last commit (or add missed files): git commit --amend -m \"New message\"\n\n4. Branching\nList all local branches: git branch\nList all local and remote branches: git branch -a\nCreate a new branch: git branch <branch-name>\nSwitch to a branch (Older way): git checkout <branch-name>\nSwitch to a branch (Newer way): git switch <branch-name>\nCreate and switch to a new branch instantly: git checkout -b <branch-name> OR git switch -c <branch-name>\nDelete a branch: git branch -d <branch-name>\n\n5. Merging & Rebasing\nMerge <branch-name> into your current branch: git merge <branch-name>\nRebase your current branch onto <branch-name>: git rebase <branch-name>\nAbort a conflicting merge/rebase: git merge --abort OR git rebase --abort\n\n6. Remote Repositories (Syncing)\nList remote connections: git remote -v\nAdd a remote connection: git remote add origin <url>\nFetch changes from remote (doesn't merge): git fetch origin\nFetch and merge changes from remote: git pull origin <branch-name>\nPush local commits to remote: git push origin <branch-name>\nForce push (use with caution!): git push -f origin <branch-name>\n\n7. Undoing Changes\nDiscard unstaged changes in a file: git checkout -- <file> OR git restore <file>\nUnstage a file (keep changes): git reset HEAD <file> OR git restore --staged <file>\nUndo a commit by creating a new reversing commit (Safe): git revert <commit-hash>\nReset to a previous commit, keeping changes unstaged: git reset <commit-hash>\nReset to a previous commit, wiping all changes (Hard): git reset --hard <commit-hash>\n\n8. Stashing (Temporary Storage)\nTemporarily save modified, tracked files: git stash\nSave with a specific message: git stash push -m \"message\"\nList all stashes: git stash list\nApply the most recent stash and remove it from stash list: git stash pop\nApply the most recent stash (keep in stash list): git stash apply\nClear all stashes: git stash clear\n\n9. History & Inspecting\nView commit history: git log\nView history in a single line: git log --oneline\nShow changes made in a specific commit: git show <commit-hash>\nShow working directory differences not yet staged: git diff\nShow differences between staging and last commit: git diff --staged"
}
  ],

  "BDD Cucumber TestNG - its Buisness": 
  [
  {
    question: "Translating Business English into Computer Confusion",
    answer: "Cucumber BDD Interview Cheat Sheet\nA quick recap of Gherkin syntax, Step Definitions, Runners, and Hooks for Cucumber Java.\n\n1. Gherkin Keywords (Feature File)\nFeature: High-level description of a software feature.\nBackground: Steps executed before EVERY scenario in the specific feature file.\nScenario: A specific business rule or test case.\nScenario Outline: Run the same scenario multiple times with different data using an Examples table.\nGiven: Preconditions or initial state (Setup).\nWhen: Actions or events (The trigger).\nThen: Expected outcomes or assertions (Verification).\nAnd / But: Used to logically chain Given/When/Then steps.\n\n2. Basic Feature File Example\nFeature: Login Functionality\n\n  Background:\n    Given User is on the login page\n\n  @smoke @login\n  Scenario: Successful login with valid credentials\n    When User enters valid username and password\n    And Clicks the login button\n    Then User should be redirected to the dashboard\n\n  @regression\n  Scenario Outline: Data Driven Login (Negative Scenarios)\n    When User enters \"<username>\" and \"<password>\"\n    Then An error message should be displayed\n    Examples:\n      | username  | password |\n      | admin     | wrong123 |\n      | invalidUsr| admin123 |\n\n3. Step Definitions (Java)\nThe mapping between the Gherkin steps and Java code.\nimport io.cucumber.java.en.*;\n\npublic class LoginSteps {\n    @Given(\"User is on the login page\")\n    public void user_is_on_login_page() {\n        // driver.get(\"url\");\n    }\n\n    // Using Cucumber Expressions to pass parameters\n    @When(\"User enters {string} and {string}\")\n    public void user_enters_credentials(String user, String pass) {\n        // driver.findElement(By.id(\"user\")).sendKeys(user);\n    }\n}\n\n4. Cucumber Options & Runner Class\nThe entry point to run Cucumber tests (usually mapped with JUnit or TestNG).\nimport io.cucumber.junit.Cucumber;\nimport io.cucumber.junit.CucumberOptions;\nimport org.junit.runner.RunWith;\n\n@RunWith(Cucumber.class)\n@CucumberOptions(\n    features = \"src/test/resources/features\", // Path to feature files\n    glue = {\"stepDefinitions\", \"hooks\"},     // Path to step defs & hooks packages\n    tags = \"@smoke and not @ignore\",         // Logical execution of specific tags\n    plugin = {\n        \"pretty\", \n        \"html:target/cucumber-reports.html\", \n        \"json:target/cucumber.json\"\n    }, // Generates reports\n    monochrome = true,                       // Makes console output readable\n    dryRun = false                           // Set true to check for missing step defs WITHOUT executing browser\n)\npublic class TestRunner { }\n\n5. Hooks (@Before and @After)\nHooks run before/after scenarios (Not steps!). Great for driver initialization and teardown.\nimport io.cucumber.java.Before;\nimport io.cucumber.java.After;\nimport io.cucumber.java.Scenario;\n\npublic class Hooks {\n    @Before(\"@smoke\") // Will run ONLY for scenarios tagged with @smoke\n    public void setUp() {\n        // Initialize WebDriver here\n    }\n\n    @After\n    public void tearDown(Scenario scenario) {\n        if(scenario.isFailed()) {\n            // Add screenshot to the Cucumber report\n            // final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);\n            // scenario.attach(screenshot, \"image/png\", scenario.getName());\n        }\n        // driver.quit();\n    }\n}\n\n6. Data Tables (Handling lists of data directly in steps)\n// Feature file step:\n// Then User sees the following menu options:\n//   | Home | Profile | Settings |\n\n@Then(\"User sees the following menu options:\")\npublic void verify_menu_options(io.cucumber.datatable.DataTable dataTable) {\n    // Extracting as a single list\n    List<String> options = dataTable.asList();\n    System.out.println(options.get(0)); // Output: Home\n    \n    // If it was a multi-column table (like headers and values):\n    // List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);\n    // System.out.println(data.get(0).get(\"HeaderName\"));\n}"
  },
  {
    question: "TestNG Interview Cheat Sheet ...!!! quick recap",
    answer: "TestNG Interview Cheat Sheet\nA quick recap of essential TestNG concepts, annotations, and configurations for interview preparation.\n\n1. Important Annotations (Execution Order)\n@BeforeSuite: Runs once before all tests in the suite.\n@BeforeTest: Runs before any test method belonging to the classes inside the <test> tag.\n@BeforeClass: Runs once before the first test method in the current class.\n@BeforeMethod: Runs before each test method.\n@Test: Marks a class or a method as part of the test.\n@AfterMethod: Runs after each test method.\n@AfterClass: Runs once after all the test methods in the current class.\n@AfterTest: Runs after all the test methods belonging to the classes inside the <test> tag.\n@AfterSuite: Runs once after all tests in this suite have run.\n\n2. Assertions\nHard Assert: Fails immediately if the condition is false. The rest of the test method stops executing.\nimport org.testng.Assert;\nAssert.assertEquals(actual, expected, \"Optional error message\");\nAssert.assertTrue(condition);\nAssert.assertFalse(condition);\n\nSoft Assert: Continues test execution even if an assertion fails. You MUST call assertAll() at the end.\nimport org.testng.asserts.SoftAssert;\nSoftAssert softAssert = new SoftAssert();\nsoftAssert.assertEquals(actual, expected);\nsoftAssert.assertTrue(condition);\nsoftAssert.assertAll(); // Critical: throws exception here if anything failed above\n\n3. testng.xml Configuration\nUsed for batch execution, parallel testing, and passing parameters.\n<!DOCTYPE suite SYSTEM \"https://testng.org/testng-1.0.dtd\">\n<suite name=\"Suite\" parallel=\"tests\" thread-count=\"2\">\n  <test name=\"Test1\">\n    <parameter name=\"browser\" value=\"chrome\"/>\n    <classes>\n      <class name=\"com.tests.LoginTest\"/>\n    </classes>\n  </test>\n</suite>\n\n4. Parameterization (@Parameters)\nUsed to pass values directly from testng.xml to test methods.\n@Parameters({\"browser\"})\n@Test\npublic void testLogin(String browser) {\n    System.out.println(\"Running on browser: \" + browser);\n}\n\n5. DataProvider (Data Driven Testing)\nUsed to run a single test method multiple times with different sets of data.\n@DataProvider(name = \"loginData\")\npublic Object[][] getData() {\n    return new Object[][] {\n        {\"user1\", \"pass1\"},\n        {\"user2\", \"pass2\"}\n    };\n}\n\n@Test(dataProvider = \"loginData\")\npublic void loginTest(String username, String password) {\n    System.out.println(username + \" - \" + password);\n}\n\n6. Test Dependencies and Priority\n@Test(priority = 1)\npublic void login() {}\n\n@Test(priority = 2, dependsOnMethods = {\"login\"})\npublic void doAction() {} // This will be SKIPPED if login() fails\n\n@Test(invocationCount = 5) // Runs this specific test 5 times consecutively\npublic void loadTest() {}\n\n@Test(enabled = false) // Ignores/Skips the test completely\npublic void skippedTest() {}\n\n@Test(timeOut = 5000) // Fails test if it takes longer than 5 seconds\npublic void timeoutTest() {}\n\n7. Grouping Tests\nAllows you to execute subsets of tests (like smoke or regression).\n@Test(groups = {\"smoke\", \"regression\"})\npublic void testMethod1() {}\n\n// Run via xml:\n// <groups>\n//   <run>\n//     <include name=\"smoke\"/>\n//     <exclude name=\"regression\"/>\n//   </run>\n// </groups>\n\n8. TestNG Listeners (ITestListener)\nUsed for custom reporting or taking screenshots on failure.\npublic class MyListener implements ITestListener {\n    public void onTestFailure(ITestResult result) {\n        System.out.println(\"Test Failed: \" + result.getName());\n    }\n}\n// Add to class: @Listeners(MyListener.class)\n// Or add to testng.xml inside <listeners> tag."
  }
 

  ],

  "AI Knows Everything  Will I Be Replaced… or Just Reviewing Its Mistakes?" : [
    {
      "question": "What is Artificial Intelligence (AI)?",
      "answer": "Artificial Intelligence is the simulation of human cognitive processes by machines, especially computer systems. It encompasses learning, reasoning, problem-solving, perception, and language understanding, allowing software to perform tasks that typically require human intelligence."
    },
    {
      "question": "What is Machine Learning (ML)?",
      "answer": "Machine Learning is a subset of AI that uses statistical techniques to give computers the ability to learn from data. Instead of being explicitly programmed with rules, ML algorithms identify patterns in historical data to make predictions or decisions on new, unseen data."
    },
    {
      "question": "What is Deep Learning (DL)?",
      "answer": "Deep Learning is a specialized field of Machine Learning based on artificial neural networks with multiple layers (hence 'deep'). These multi-layered networks can process highly complex, unstructured data like high-resolution images, audio, and vast amounts of text."
    },
    {
      "question": "What is Generative AI (GenAI)?",
      "answer": "Generative AI refers to AI models designed to create new, original content rather than just analyzing or categorizing existing data. It uses patterns learned from massive training datasets to generate novel text, images, video, audio, or software code."
    },
    {
      "question": "What is a Large Language Model (LLM)?",
      "answer": "A Large Language Model is a type of Generative AI specifically trained on vast text datasets to understand and generate human language. LLMs use billions of parameters to comprehend context, grammar, and facts, enabling them to translate, summarize, and converse fluently."
    },
    {
      "question": "How does the Transformer Architecture work?",
      "answer": "The Transformer architecture allows models to process entire sequences of text simultaneously rather than word-by-word. It uses a 'self-attention' mechanism to weigh the importance of every word in a sentence relative to every other word, successfully capturing deep contextual meaning over long passages. "
    },
    {
      "question": "What is Natural Language Processing (NLP)?",
      "answer": "Natural Language Processing is the branch of AI that deals with the interaction between computers and humans using natural language. It involves giving machines the ability to read, understand, and derive meaning from human languages."
    },
    {
      "question": "What is the difference between NLU and NLG?",
      "answer": "Natural Language Understanding (NLU) focuses on machine reading comprehension—deciphering the meaning, intent, and sentiment behind human text. Natural Language Generation (NLG) is the inverse process, where the machine transforms structured data or AI thoughts back into readable human language."
    },
    {
      "question": "What are Tokens in the context of LLMs?",
      "answer": "Tokens are the fundamental units of data processed by an LLM. Depending on the tokenizer used, a token can be a single character, a syllable, a whole word, or a sub-word. Models have strict limits on how many tokens they can process at one time."
    },
    {
      "question": "What is a Context Window?",
      "answer": "The Context Window is the maximum number of tokens an AI model can process in a single interaction, encompassing both the user's prompt and the model's generated response. If a conversation exceeds this limit, the model loses the earliest parts of the context."
    },
    {
      "question": "What are Model Parameters and Weights?",
      "answer": "Parameters, or weights, are the internal variables that a neural network adjusts during training to minimize errors. You can think of them as the 'knowledge' the model has acquired. A model with 70 billion parameters has 70 billion individual mathematical connections determining how it processes input."
    },
    {
      "question": "What is Model Fine-Tuning?",
      "answer": "Fine-tuning is the process of taking a pre-trained base model and training it further on a smaller, domain-specific dataset. This permanently adjusts the model's internal weights to adapt its tone, format, or knowledge base for specialized tasks, like medical diagnosis or legal analysis."
    },
    {
      "question": "What is RLHF (Reinforcement Learning from Human Feedback)?",
      "answer": "RLHF is a training method used to align an LLM's behavior with human preferences. Human testers rate the AI's responses, and this feedback is used to train a 'reward model'. The reward model then automatically guides the AI to generate safer, more helpful, and less toxic answers."
    },
    {
      "question": "What is Prompt Engineering?",
      "answer": "Prompt Engineering is the practice of designing, structuring, and refining the text input (prompt) given to an AI to produce the most accurate and relevant output. It involves choosing the right persona, constraints, and instructions to guide the model's behavior."
    },
    {
      "question": "What is Zero-Shot Prompting?",
      "answer": "Zero-shot prompting is asking an AI model to perform a task without providing any examples of the desired output. The model relies entirely on its pre-trained knowledge to understand the instruction and generate the response."
    },
    {
      "question": "What is Few-Shot Prompting?",
      "answer": "Few-shot prompting involves including a few examples of the desired input-output pairs within the prompt itself. This helps the model understand the specific format, tone, or logic required before it attempts to answer the actual query."
    },
    {
      "question": "What is Chain of Thought (CoT) Prompting?",
      "answer": "Chain of Thought is a prompting technique that instructs the LLM to explain its reasoning step-by-step before providing the final answer. This significantly improves the model's performance on complex logic, math, and reasoning tasks by forcing it to 'think aloud'."
    },
    {
      "question": "What is a System Prompt?",
      "answer": "A System Prompt is an underlying, invisible set of instructions given to an AI before it interacts with a user. It defines the AI's core persona, boundaries, rules, and restrictions (e.g., 'You are a helpful customer support bot. Never discuss politics.')."
    },
    {
      "question": "How does the Temperature setting affect AI responses?",
      "answer": "Temperature is a parameter that controls the randomness of the AI's output. A low temperature (e.g., 0.1) makes the model highly deterministic and focused, picking the most probable words. A high temperature (e.g., 0.9) increases creativity and randomness, but can also increase the risk of hallucinations."
    },
    {
      "question": "What is Top-P (Nucleus Sampling)?",
      "answer": "Top-P is an alternative to Temperature for controlling AI randomness. It tells the model to only consider the subset of words whose cumulative probability adds up to the value 'P'. For example, a Top-P of 0.9 means the model ignores the most obscure 10% of possible next words."
    },
    {
      "question": "What is Retrieval-Augmented Generation (RAG)?",
      "answer": "RAG is a framework that connects an LLM to an external, private database. When a query is made, the system searches the database for relevant documents, appends them to the prompt, and sends them to the LLM. This allows the AI to answer questions using secure, up-to-date information without hallucinating. "
    },
    {
      "question": "What are Vector Embeddings?",
      "answer": "Embeddings are arrays of numbers (vectors) that represent the semantic meaning of text. Words or sentences with similar meanings are mapped closer together in a high-dimensional mathematical space, allowing machines to understand the relationship between concepts."
    },
    {
      "question": "What is a Vector Database?",
      "answer": "A Vector Database is a specialized storage system designed to index and query vector embeddings efficiently. Unlike traditional relational databases that search for exact keywords, vector databases search for data based on semantic similarity and meaning."
    },
    {
      "question": "What is Semantic Search?",
      "answer": "Semantic Search is a data retrieval method that searches for the intent and contextual meaning behind a query, rather than relying on exact keyword matches. It is powered by vector embeddings and is the core retrieval mechanism in a RAG pipeline."
    },
    {
      "question": "What is Chunking in RAG pipelines?",
      "answer": "Chunking is the process of breaking down large documents into smaller, manageable pieces (chunks) before converting them into vector embeddings. This ensures that the search retrieves highly specific paragraphs of context rather than entire massive documents, fitting efficiently into the LLM's context window."
    },
    {
      "question": "What is LangChain?",
      "answer": "LangChain is a popular open-source framework used to develop applications powered by LLMs. It provides standardized tools to connect models to external data sources, manage conversation memory, and chain multiple AI steps together to build complex workflows and agents."
    },
    {
      "question": "What are AI Agents?",
      "answer": "AI Agents are LLM-powered systems capable of autonomous decision-making. Instead of just answering questions, an agent is given a goal and access to tools (like a web browser, a calculator, or APIs). The agent decides on a plan, uses the tools, observes the results, and iterates until the goal is achieved."
    },
    {
      "question": "What is LlamaIndex?",
      "answer": "LlamaIndex is a data framework specifically designed to connect custom data sources to LLMs. While similar to LangChain, LlamaIndex focuses heavily on optimizing the ingestion, structuring, and retrieval of data for advanced RAG applications."
    },
    {
      "question": "What is Hugging Face?",
      "answer": "Hugging Face is a collaborative platform and community that hosts hundreds of thousands of open-source machine learning models, datasets, and libraries. It provides the tools necessary for engineers to download, test, and deploy AI models locally or in the cloud."
    },
    {
      "question": "What is Ollama?",
      "answer": "Ollama is an open-source application that allows developers to run powerful Large Language Models (like Llama 3) locally on their own hardware. It is highly valued in AI testing for allowing local, cost-free, and highly secure experimentation without relying on external APIs."
    },
    {
      "question": "How is AI used in Software Testing?",
      "answer": "AI accelerates software testing by automatically generating test scripts, creating synthetic test data, and predicting which application areas are most prone to defects based on historical commits. It is also used heavily in visual validation to detect UI anomalies."
    },
    {
      "question": "What is Self-Healing in Test Automation?",
      "answer": "Self-healing is an AI-driven capability in testing frameworks that prevents automated tests from breaking when the application's UI changes. If an element's ID or XPath is modified, the AI automatically searches the DOM using other attributes to locate the intended element and dynamically repairs the test script."
    },
    {
      "question": "What is AI Hallucination?",
      "answer": "Hallucination is a phenomenon where an AI confidently generates information that is factually incorrect, illogical, or entirely fabricated. This occurs because LLMs predict the most probable sequence of words without possessing an actual understanding of truth or reality."
    },
    {
      "question": "Why do LLMs hallucinate?",
      "answer": "LLMs hallucinate due to several factors: incomplete training data, outdated knowledge, exceeding the context window, or flawed prompts. Because they are designed to prioritize generating a fluent response over saying 'I don't know', they will piece together plausible-sounding but false statements."
    },
    {
      "question": "What is DeepEval?",
      "answer": "DeepEval is an open-source evaluation framework built specifically for LLMs. It functions similarly to traditional unit testing tools but provides specialized metrics to programmatically score an AI's output on criteria like factual accuracy, bias, and answer relevancy."
    },
    {
      "question": "What is Faithfulness in AI evaluation?",
      "answer": "Faithfulness evaluates whether the information contained in an AI's response can be directly inferred from the provided context. If the AI introduces facts or claims not present in the retrieved documents, the response is considered unfaithful (a hallucination)."
    },
    {
      "question": "What is Answer Relevancy?",
      "answer": "Answer Relevancy is a metric that measures how directly and concisely the AI addressed the user's specific prompt. It penalizes responses that are evasive, overly verbose, or discuss tangential topics instead of answering the core question."
    },
    {
      "question": "What is Botium used for?",
      "answer": "Botium is an industry-standard testing framework designed for conversational AI. It automates the testing of chatbots and voice assistants, verifying intent recognition, conversation flow, and multi-language support across various messaging platforms."
    },
    {
      "question": "What is Red Teaming in AI?",
      "answer": "Red Teaming is an adversarial testing methodology where security engineers intentionally attack an AI model using carefully crafted prompts. The goal is to bypass safety filters, trigger hallucinations, extract sensitive data, or force the model to generate toxic content to identify vulnerabilities."
    },
    {
      "question": "What is Prompt Injection?",
      "answer": "Prompt Injection is a security attack where a malicious user inputs text designed to override the AI's core system instructions. By tricking the model into ignoring its safety guidelines, the attacker can hijack the AI to output restricted data or execute unauthorized commands."
    },
    {
      "question": "How do you test for AI Bias?",
      "answer": "Testing for AI bias involves evaluating the model against counterfactual datasets. Testers input the exact same prompt multiple times, changing only demographic markers (like gender, race, or age) to ensure the model's decisions, tone, or recommendations do not unfairly shift against specific groups."
    },
    {
      "question": "What is a Confusion Matrix?",
      "answer": "A Confusion Matrix is a performance evaluation tool used for classification models. It is a table that plots the actual ground-truth values against the model's predicted values, categorizing the results into True Positives, True Negatives, False Positives, and False Negatives. "
    },
    {
      "question": "What is Accuracy in Machine Learning?",
      "answer": "Accuracy is the ratio of correctly predicted observations to the total number of observations. While it is the most intuitive metric, it can be highly misleading when dealing with imbalanced datasets, where predicting only the majority class yields an artificially high score."
    },
    {
      "question": "What is Precision?",
      "answer": "Precision measures the quality of the model's positive predictions. It is calculated by dividing the True Positives by the sum of True Positives and False Positives. A high precision score indicates that when the model predicts a positive outcome, it is highly likely to be correct."
    },
    {
      "question": "What is Recall?",
      "answer": "Recall, or Sensitivity, measures the model's ability to identify all actual positive instances. It is calculated by dividing True Positives by the sum of True Positives and False Negatives. A high recall score means the model successfully detects most of the positive cases without missing them."
    },
    {
      "question": "What is the F1 Score?",
      "answer": "The F1 Score is the harmonic mean of Precision and Recall. It provides a single, balanced metric that heavily penalizes models that sacrifice one for the other. It is the preferred metric for evaluating models on datasets with an uneven class distribution."
    },
    {
      "question": "What is the BLEU Score?",
      "answer": "BLEU (Bilingual Evaluation Understudy) is a metric used primarily to evaluate machine translation. It compares the AI-generated text to human-written reference translations by measuring precision—specifically, checking how many of the exact words and phrases from the AI's output exist in the human reference."
    },
    {
      "question": "What is the ROUGE Score?",
      "answer": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a set of metrics used mostly for evaluating text summarization. Unlike BLEU, ROUGE focuses on recall, measuring how much of the vital information from a human-written reference was successfully captured by the AI's summary."
    },
    {
      "question": "What is Perplexity in LLMs?",
      "answer": "Perplexity is a mathematical metric used to evaluate how well a language model predicts a sample of text. A low perplexity indicates that the model is highly confident and accurate in predicting the sequence of words, meaning it possesses a strong understanding of the language structure."
    },
    {
      "question": "What is Ground Truth in AI evaluation?",
      "answer": "Ground Truth refers to the absolute, factual data provided by humans used to train or evaluate a model. In AI testing, the model's generated outputs are constantly compared against this 'ground truth' dataset to calculate metrics like accuracy, precision, and recall."
    },
    {
      "question": "How do you evaluate the Toxicity of an AI model?",
      "answer": "Toxicity evaluation involves scanning the AI's output for hate speech, harassment, profanity, or dangerous advice. This is typically done using automated moderation APIs (like OpenAI's Moderation API) or specialized toxic-language classifiers that score the output's safety before it reaches the user."
    },
    {
      "question": "What is Human-in-the-Loop (HITL) testing?",
      "answer": "Human-in-the-loop is a testing and operational methodology where human experts review, correct, or approve the AI's decisions before they are finalized. It is crucial in high-risk domains like healthcare or finance, ensuring that an AI's outputs are safe and accurate when automated metrics are insufficient."
    }
  ],

 
  "Programs Coding Round Code Panic: The I Know This… Why Can’t I Solve It? Survival Guide": [
    {
      "question": "Write a program to find the Maximum of 3 Numbers",
      "answer": "class MaxOfThree {\n  static findMax(a: number, b: number, c: number): number {\n    let max = a;\n    if (b > max) {\n      max = b;\n    }\n    if (c > max) {\n      max = c;\n    }\n    return max;\n  }\n}\nconsole.log('Maximum is: ' + MaxOfThree.findMax(10, 25, 15));"
    },
    {
      "question": "Write a program to Swap 2 Numbers",
      "answer": "class SwapNumbers {\n  static swap(a: number, b: number): void {\n    let temp = a;\n    a = b;\n    b = temp;\n    console.log('a: ' + a + ', b: ' + b);\n  }\n}\nSwapNumbers.swap(5, 10);"
    },
    {
      "question": "Write a program to find the Average and Sum of an array",
      "answer": "class AverageAndSum {\n  static calculate(arr: number[]): void {\n    let sum = 0;\n    for (let i = 0; i < arr.length; i++) {\n      sum = sum + arr[i];\n    }\n    let avg = sum / arr.length;\n    console.log('Sum: ' + sum + ', Average: ' + avg);\n  }\n}\nAverageAndSum.calculate([10, 20, 30, 40, 50]);"
    },
    {
      "question": "Write a program to calculate the Area of Circle",
      "answer": "class AreaOfCircle {\n  static calculateArea(radius: number): number {\n    let pi = 3.14159;\n    return pi * radius * radius;\n  }\n}\nconsole.log('Area is: ' + AreaOfCircle.calculateArea(5));"
    },
    {
      "question": "Write a program to calculate Compound Interest",
      "answer": "class CompoundInterest {\n  static calculate(principal: number, rate: number, time: number): number {\n    let amount = principal;\n    for (let i = 0; i < time; i++) {\n      amount = amount + (amount * (rate / 100));\n    }\n    return amount;\n  }\n}\nconsole.log('Amount: ' + CompoundInterest.calculate(1000, 5, 2));"
    },
    {
      "question": "Write a program to Generate 5 random Integers",
      "answer": "class GenerateIntegers {\n  static generate(): void {\n    for (let i = 0; i < 5; i++) {\n      let randomNum = Math.floor(Math.random() * 100);\n      console.log('Random: ' + randomNum);\n    }\n  }\n}\nGenerateIntegers.generate();"
    },
    {
      "question": "Write a program to check for a Leap year",
      "answer": "class LeapYear {\n  static checkLeap(year: number): boolean {\n    if (year % 400 === 0) {\n      return true;\n    } else if (year % 100 === 0) {\n      return false;\n    } else if (year % 4 === 0) {\n      return true;\n    }\n    return false;\n  }\n}\nconsole.log('Is Leap Year? ' + LeapYear.checkLeap(2024));"
    },
    {
      "question": "Write a program to find the Sum of n numbers",
      "answer": "class SumOfN {\n  static calculate(n: number): number {\n    let sum = 0;\n    for (let i = 1; i <= n; i++) {\n      sum = sum + i;\n    }\n    return sum;\n  }\n}\nconsole.log('Sum: ' + SumOfN.calculate(10));"
    },
    {
      "question": "Write a program to check if a number is Odd or Even",
      "answer": "class OddOrEven {\n  static check(num: number): string {\n    if (num % 2 === 0) {\n      return 'Even';\n    } else {\n      return 'Odd';\n    }\n  }\n}\nconsole.log('Number is: ' + OddOrEven.check(15));"
    },
    {
      "question": "Write a program to generate a Fibonacci Series",
      "answer": "class FibonacciSeries {\n  static generate(count: number): void {\n    let a = 0;\n    let b = 1;\n    console.log(a);\n    console.log(b);\n    for (let i = 2; i < count; i++) {\n      let next = a + b;\n      console.log(next);\n      a = b;\n      b = next;\n    }\n  }\n}\nFibonacciSeries.generate(10);"
    },
    {
      "question": "Write a program to find the Sum of its digits",
      "answer": "class SumOfDigits {\n  static calculate(num: number): number {\n    let sum = 0;\n    while (num > 0) {\n      let digit = num % 10;\n      sum = sum + digit;\n      num = Math.floor(num / 10);\n    }\n    return sum;\n  }\n}\nconsole.log('Sum of digits: ' + SumOfDigits.calculate(12345));"
    },
    {
      "question": "Write a program to calculate Factorial",
      "answer": "class Factorial {\n  static calculate(n: number): number {\n    let fact = 1;\n    for (let i = 1; i <= n; i++) {\n      fact = fact * i;\n    }\n    return fact;\n  }\n}\nconsole.log('Factorial: ' + Factorial.calculate(5));"
    },
    {
      "question": "Write a program to Reverse the number",
      "answer": "class ReverseNumber {\n  static reverse(num: number): number {\n    let reversed = 0;\n    while (num > 0) {\n      let remainder = num % 10;\n      reversed = (reversed * 10) + remainder;\n      num = Math.floor(num / 10);\n    }\n    return reversed;\n  }\n}\nconsole.log('Reversed: ' + ReverseNumber.reverse(98765));"
    },
    {
      "question": "Write a program to check for Prime Numbers",
      "answer": "class PrimeNumber {\n  static isPrime(num: number): boolean {\n    if (num <= 1) {\n      return false;\n    }\n    for (let i = 2; i < num; i++) {\n      if (num % i === 0) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\nconsole.log('Is Prime? ' + PrimeNumber.isPrime(29));"
    },
    {
      "question": "Write a program to print a Number Triangle",
      "answer": "class NumberTriangle {\n  static print(rows: number): void {\n    for (let i = 1; i <= rows; i++) {\n      let rowStr = '';\n      for (let j = 1; j <= i; j++) {\n        rowStr = rowStr + i + ' ';\n      }\n      console.log(rowStr);\n    }\n  }\n}\nNumberTriangle.print(5);"
    },
    {
      "question": "Write a program to print Floyd's Triangle",
      "answer": "class FloydsTriangle {\n  static print(rows: number): void {\n    let count = 1;\n    for (let i = 1; i <= rows; i++) {\n      let rowStr = '';\n      for (let j = 1; j <= i; j++) {\n        rowStr = rowStr + count + ' ';\n        count++;\n      }\n      console.log(rowStr);\n    }\n  }\n}\nFloydsTriangle.print(4);"
    },
    {
      "question": "Write a program to sort an array in Ascending Order",
      "answer": "class AscendingOrder {\n  static sort(arr: number[]): number[] {\n    for (let i = 0; i < arr.length; i++) {\n      for (let j = i + 1; j < arr.length; j++) {\n        if (arr[i] > arr[j]) {\n          let temp = arr[i];\n          arr[i] = arr[j];\n          arr[j] = temp;\n        }\n      }\n    }\n    return arr;\n  }\n}\nconsole.log('Sorted: ' + AscendingOrder.sort([5, 2, 8, 1, 9]));"
    },
    {
      "question": "Write a program to check for an Armstrong Number",
      "answer": "class ArmstrongNumber {\n  static isArmstrong(num: number): boolean {\n    let originalNum = num;\n    let sum = 0;\n    while (num > 0) {\n      let digit = num % 10;\n      sum = sum + (digit * digit * digit);\n      num = Math.floor(num / 10);\n    }\n    return sum === originalNum;\n  }\n}\nconsole.log('Is Armstrong? ' + ArmstrongNumber.isArmstrong(153));"
    },
    {
      "question": "Write a program to check if a string is a Palindrome",
      "answer": "class Palindrome {\n  static isPalindrome(str: string): boolean {\n    let reversed = '';\n    for (let i = str.length - 1; i >= 0; i--) {\n      reversed = reversed + str[i];\n    }\n    return str === reversed;\n  }\n}\nconsole.log('Is Palindrome? ' + Palindrome.isPalindrome('madam'));"
    },
    {
      "question": "Write a program to find the Small and Large Number in an Array",
      "answer": "class ArrayMinMax {\n  static find(arr: number[]): void {\n    let min = arr[0];\n    let max = arr[0];\n    for (let i = 1; i < arr.length; i++) {\n      if (arr[i] < min) {\n        min = arr[i];\n      }\n      if (arr[i] > max) {\n        max = arr[i];\n      }\n    }\n    console.log('Smallest: ' + min + ', Largest: ' + max);\n  }\n}\nArrayMinMax.find([12, 45, 2, 78, 34]);"
    },
    {
      "question": "Write a program for Array Comparison",
      "answer": "class ArrayComparison {\n  static compare(arr1: number[], arr2: number[]): boolean {\n    if (arr1.length !== arr2.length) {\n      return false;\n    }\n    for (let i = 0; i < arr1.length; i++) {\n      if (arr1[i] !== arr2[i]) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\nconsole.log('Arrays Equal? ' + ArrayComparison.compare([1, 2, 3], [1, 2, 3]));"
    },
    {
      "question": "Write a program for String Comparison",
      "answer": "class StringComparison {\n  static compare(str1: string, str2: string): boolean {\n    if (str1.length !== str2.length) {\n      return false;\n    }\n    for (let i = 0; i < str1.length; i++) {\n      if (str1[i] !== str2[i]) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\nconsole.log('Strings Equal? ' + StringComparison.compare('hello', 'hello'));"
    },
    {
      "question": "Write a program to Reverse a String",
      "answer": "class StringReverse {\n  static reverse(str: string): string {\n    let reversed = '';\n    for (let i = str.length - 1; i >= 0; i--) {\n      reversed = reversed + str[i];\n    }\n    return reversed;\n  }\n}\nconsole.log('Reversed: ' + StringReverse.reverse('typescript'));"
    },
    {
      "question": "Write a program to Split a String",
      "answer": "class StringSplit {\n  static split(str: string): string[] {\n    let words: string[] = [];\n    let currentWord = '';\n    for (let i = 0; i < str.length; i++) {\n      if (str[i] === ' ') {\n        words.push(currentWord);\n        currentWord = '';\n      } else {\n        currentWord = currentWord + str[i];\n      }\n    }\n    words.push(currentWord);\n    return words;\n  }\n}\nconsole.log(StringSplit.split('Hello World App'));"
    },
    {
      "question": "Write a program to find String Length",
      "answer": "class StringLength {\n  static getLength(str: string): number {\n    let count = 0;\n    while (str[count] !== undefined) {\n      count++;\n    }\n    return count;\n  }\n}\nconsole.log('Length: ' + StringLength.getLength('OpenAI'));"
    },
    {
      "question": "Write a program for String Conversion",
      "answer": "class StringConversion {\n  static convert(num: number): string {\n    return num + '';\n  }\n}\nconsole.log('String: ' + StringConversion.convert(1024));"
    },
    {
      "question": "Write a program to get a Sub String",
      "answer": "class SubString {\n  static getSub(str: string, start: number, end: number): string {\n    let result = '';\n    for (let i = start; i < end; i++) {\n      result = result + str[i];\n    }\n    return result;\n  }\n}\nconsole.log('Substring: ' + SubString.getSub('Programming', 3, 7));"
    },
    {
      "question": "Write a program to Get IP Address",
      "answer": "import * as os from 'os';\nclass GetIPAddress {\n  static printIP(): void {\n    let networkInterfaces = os.networkInterfaces();\n    console.log(networkInterfaces);\n  }\n}\nGetIPAddress.printIP();"
    },
    {
      "question": "Write a program to find the Power of a number",
      "answer": "class PowerOfNumber {\n  static calculate(base: number, exponent: number): number {\n    let result = 1;\n    for (let i = 1; i <= exponent; i++) {\n      result = result * base;\n    }\n    return result;\n  }\n}\nconsole.log('Power: ' + PowerOfNumber.calculate(2, 5));"
    },
    {
      "question": "Write a program for Collection Iteration",
      "answer": "class CollectionIteration {\n  static iterate(arr: string[]): void {\n    for (let i = 0; i < arr.length; i++) {\n      console.log('Item ' + i + ': ' + arr[i]);\n    }\n  }\n}\nCollectionIteration.iterate(['Apple', 'Banana', 'Cherry']);"
    },
    {
      "question": "Write a program to Remove Item from an Array",
      "answer": "class RemoveItem {\n  static remove(arr: number[], itemToRemove: number): number[] {\n    let newArr: number[] = [];\n    for (let i = 0; i < arr.length; i++) {\n      if (arr[i] !== itemToRemove) {\n        newArr.push(arr[i]);\n      }\n    }\n    return newArr;\n  }\n}\nconsole.log('New Array: ' + RemoveItem.remove([10, 20, 30, 40, 50], 30));"
    },
    {
      "question": "Write a program to Search File",
      "answer": "import * as fs from 'fs';\nclass SearchFile {\n  static find(filePath: string): boolean {\n    return fs.existsSync(filePath);\n  }\n}\nconsole.log('File exists? ' + SearchFile.find('./test.txt'));"
    },
    {
      "question": "Write a program to get File size",
      "answer": "import * as fs from 'fs';\nclass FileSize {\n  static getSize(filePath: string): number {\n    if (fs.existsSync(filePath)) {\n      let stats = fs.statSync(filePath);\n      return stats.size;\n    }\n    return 0;\n  }\n}\nconsole.log('Size: ' + FileSize.getSize('./test.txt'));"
    },
    {
      "question": "Write a program to find the Square and Cube of a number",
      "answer": "class SquareAndCube {\n  static calculate(num: number): void {\n    let square = num * num;\n    let cube = num * num * num;\n    console.log('Square: ' + square + ', Cube: ' + cube);\n  }\n}\nSquareAndCube.calculate(4);"
    },
    {
      "question": "Write a program to Read Text file",
      "answer": "import * as fs from 'fs';\nclass ReadTextFile {\n  static read(filePath: string): string {\n    if (fs.existsSync(filePath)) {\n      return fs.readFileSync(filePath, 'utf8');\n    }\n    return 'File not found';\n  }\n}\nconsole.log(ReadTextFile.read('./test.txt'));"
    },
    {
      "question": "Write a program to Write Text file",
      "answer": "import * as fs from 'fs';\nclass WriteTextFile {\n  static write(filePath: string, data: string): void {\n    fs.writeFileSync(filePath, data, 'utf8');\n    console.log('File written successfully.');\n  }\n}\nWriteTextFile.write('./output.txt', 'Hello World');"
    }
  ],

  "TypeScript Trouble": [
    {
      "question": "Explain the data types available in TypeScript.",
      "answer": "TypeScript provides both built-in (primitive) and user-defined data types. Built-in types include String (text values), Number (numeric values), Boolean (true/false), Null (intentional absence of value), Undefined (uninitialized variables), 'any' (disables strict type checking), and 'void' (indicates a function returns no value). User-defined types include Arrays (collections of values of a specific type), Enums (named constants), Classes (object blueprints), and Interfaces (structural contracts)."
    },
    {
      "question": "In how many ways can we declare variables in TypeScript?",
      "answer": "There are three primary ways to declare variables in TypeScript. The 'var' keyword is the oldest method and has function-scope or global-scope. The 'let' keyword, introduced in ES6, is the modern standard for variables whose values will change, as it provides block-scope safety. The 'const' keyword is also block-scoped but is used to declare immutable variable references whose values cannot be reassigned after initialization."
    },
    {
      "question": "How do you declare explicit variables with type annotations in TypeScript?",
      "answer": "You can explicitly define a variable's type by adding a colon (:) followed by the data type after the variable name. Once explicitly typed, you cannot assign a value of a different data type to that variable. For example: `let company_name: string = 'TechCorp';`. If you attempt to assign a number to `company_name` later, the TypeScript compiler will throw an error."
    },
    {
      "question": "How do you declare a function with type annotations in TypeScript?",
      "answer": "In TypeScript, you can strongly type a function by specifying the data types for each of its parameters, as well as the data type of the value the function will return. For example: `function getUser(name: string, age: number): string { return name + ' is ' + age; }`. If you pass arguments of the wrong type, the compiler throws an error."
    },
    {
      "question": "Describe the 'any' type in TypeScript.",
      "answer": "The 'any' data type is an escape hatch that turns off TypeScript's strict type-checking for a specific variable, allowing it to hold a value of any type. It is useful when migrating legacy JavaScript code or when dealing with highly dynamic data from third-party APIs where the structure is completely unknown. However, its use should be minimized, as it defeats the purpose of using TypeScript."
    },
    {
      "question": "What are the advantages of using TypeScript?",
      "answer": "\nTypeScript offers several major advantages: it catches type-related errors at compile-time rather than run-time, reducing production bugs. It supports strong static typing, making code more predictable. It provides advanced IDE features like reliable auto-completion, refactoring tools, and IntelliSense. Finally, it compiles down to standard JavaScript, ensuring cross-browser compatibility."
    },
    {
      "question": "List some disadvantages of using TypeScript.",
      "answer": "Disadvantages include a steeper learning curve compared to plain JavaScript. It requires an additional compilation (transpilation) step to convert the .ts files into executable .js files, which can slightly slow down build times. Additionally, integrating third-party JavaScript libraries often requires hunting down or writing custom declaration (.d.ts) files to ensure proper type checking."
    },
    {
      "question": "Explain the 'void' type in TypeScript.",
      "answer": "The 'void' type represents the absence of any specific data type. It is predominantly used as the return type for functions that execute logic but do not return a value to the caller. Variables of type void can technically only be assigned 'undefined' (or 'null' if strict null checks are disabled)."
    },
    {
      "question": "What is the 'null' type and its use in TypeScript?",
      "answer": "The 'null' keyword is a primitive type that represents the deliberate, intentional absence of any object value. It is often used to initialize variables that are expected to hold an object later, or to explicitly clear a variable's value. In strict mode, a variable must be explicitly typed as `Type | null` to accept a null value safely."
    },
    {
      "question": "Describe the syntax for creating typed objects in TypeScript.",
      "answer": "An object in TypeScript is a collection of key-value pairs. You can strongly type an object inline or via an interface. Inline syntax looks like this: `const myObj: { name: string, year: number } = { name: 'App', year: 2024 };`. This ensures that `myObj` always contains exactly those keys with those specific data types."
    },
    {
      "question": "Can we specify optional properties in a TypeScript Object? If so, how?",
      "answer": "Yes, you can make object properties optional by adding a question mark (?) immediately after the property name in the type definition. For example: `const user: { name: string, age?: number } = { name: 'Alice' };`. Here, the `age` property is optional, so the compiler will not throw an error if it is omitted."
    },
    {
      "question": "Explain the 'undefined' type in TypeScript.",
      "answer": "'undefined' is a primitive type indicating that a variable has been declared but has not yet been assigned a value. During JavaScript's memory allocation phase, variables are initially set to undefined. Like 'null', it is often used in union types to indicate that a value might not be present yet."
    },
    {
      "question": "Explain the behavior of arrays in TypeScript.",
      "answer": "Unlike JavaScript arrays, which can loosely hold a mix of any data types, TypeScript arrays are strongly typed. When you declare an array like `const ages: number[] = [10, 20];`, TypeScript enforces that only numbers can be added to this array. Attempting to push a string into `ages` will trigger a compile-time error."
    },
    {
      "question": "How can you compile a TypeScript file?",
      "answer": "TypeScript files cannot be run directly by browsers or standard Node.js environments. They must be transpiled into JavaScript. You do this using the TypeScript Compiler command: `tsc filename.ts`. This reads the TypeScript file and generates an equivalent `filename.js` file."
    },
    {
      "question": "Differentiate between the .ts and .tsx file extensions in TypeScript.",
      "answer": "The .ts extension is used for standard TypeScript files that contain pure logic, classes, interfaces, and functions. The .tsx extension is specifically used when working with React. It tells the compiler that the file contains JSX syntax (HTML-like tags embedded in the code), allowing TypeScript to parse and type-check React components correctly."
    },
    {
      "question": "What is the 'in' operator and why is it used in TypeScript?",
      "answer": "The 'in' operator is a JavaScript feature heavily utilized in TypeScript as a Type Guard. It checks whether a specific property exists on an object (e.g., `'age' in user`). In TypeScript, wrapping code in an 'if' statement with the 'in' operator narrows down the object's type within that block, preventing errors when accessing properties of union types."
    },
    {
      "question": "Explain union types in TypeScript.",
      "answer": "\nUnion types allow a variable to hold values of multiple, distinct data types. They are defined using the vertical pipe symbol (|). For example, `let id: string | number;` means the variable `id` can safely store either a string or a number, providing flexibility while maintaining strict compiler safety."
    },
    {
      "question": "Explain type aliases in TypeScript.",
      "answer": "A Type Alias allows you to create a custom, descriptive name for any valid TypeScript type, including primitives, unions, and complex object shapes. Defined using the `type` keyword (e.g., `type ID = string | number;`), they do not create a new underlying type, but rather provide a readable shorthand that can be reused throughout the codebase."
    },
    {
      "question": "Is TypeScript a strictly statically typed language?",
      "answer": "TypeScript is an *optionally* statically typed language. While it defaults to enforcing static types, developers have the freedom to opt-out of strict checking by using the 'any' type, omitting type annotations (relying on inference), or disabling strict flags in the `tsconfig.json` file. This flexibility allows for gradual migration from JavaScript."
    },
    {
      "question": "Are template literals supported in TypeScript?",
      "answer": "Yes, TypeScript fully supports ES6 template literals. Defined using backticks (``), they allow for multi-line strings and seamless string interpolation. You can embed variables or expressions directly into the string using the `${variable}` syntax, which is much cleaner than traditional string concatenation."
    },
    {
      "question": "How do you declare an arrow function in TypeScript?",
      "answer": "Arrow functions in TypeScript use the same ES6 syntax as JavaScript but add type annotations. You define the types of the parameters inside the parentheses and the return type immediately after. Example: `const add = (a: number, b: number): number => { return a + b; };`."
    },
    {
      "question": "How do you define a function that accepts optional parameters?",
      "answer": "You can make a function parameter optional by appending a question mark (?) to the parameter name in the function signature. For example: `function greet(name: string, greeting?: string)`. Optional parameters must always be listed after all required parameters in the function definition."
    },
    {
      "question": "Explain the 'noImplicitAny' flag in TypeScript.",
      "answer": "'noImplicitAny' is a strict compiler rule configured in the `tsconfig.json` file. When enabled, it forces the compiler to throw an error if it cannot automatically infer the type of a variable or parameter, preventing it from silently defaulting to the unsafe 'any' type. This enforces better, explicit type documentation."
    },
    {
      "question": "What are interfaces in TypeScript?",
      "answer": "An Interface defines a structural contract or blueprint that an object or class must adhere to. It outlines the specific properties, methods, and their associated data types. Interfaces contain no actual implementation logic—they only exist at compile-time to ensure objects are shaped correctly."
    },
    {
      "question": "In how many ways can you use loops in TypeScript?",
      "answer": "TypeScript supports all standard JavaScript loops. The traditional `for(let i=0; i<n; i++)` is used for index-based iteration. The `for...of` loop is used to iterate directly over the values of iterable objects like arrays. Additionally, array methods like `forEach()` take a callback function to execute logic on every item in the array."
    },
    {
      "question": "What is the 'never' type and its uses in TypeScript?",
      "answer": "The 'never' type represents a state that logically should never occur. It is commonly used as the return type for functions that contain an infinite loop (and thus never finish executing) or functions that always throw an Error. Unlike 'void', which returns undefined, a 'never' function abruptly terminates or never completes."
    },
    {
      "question": "Explain the working of enums in TypeScript.",
      "answer": "Enums (enumerations) allow developers to define a set of named constants, making code more readable. By default, enums are numeric and zero-indexed, meaning the first value is 0, the next is 1, and so on. TypeScript also supports string enums, where each member is explicitly initialized with a string value, preventing arbitrary number assignment."
    },
    {
      "question": "Explain parameter destructuring in TypeScript.",
      "answer": "Parameter destructuring allows you to unpack specific properties from an object directly in the function signature, rather than passing the whole object and accessing properties via dot notation. In TypeScript, you must also provide a type literal for the destructured object. Example: `function printUser({ name, age }: { name: string, age: number }) { ... }`."
    },
    {
      "question": "Explain type inference in TypeScript.",
      "answer": "Type inference is the compiler's ability to automatically determine a variable's data type based on the value assigned to it during initialization. For example, if you write `let score = 100;`, TypeScript infers that `score` is a number without you explicitly typing it as `let score: number = 100;`."
    },
    {
      "question": "What are modules in TypeScript?",
      "answer": "Modules are a mechanism to organize code into separate files and encapsulate scope. Any TypeScript file containing a top-level `import` or `export` statement is considered a module. Variables, functions, and classes inside a module are hidden from the global scope and must be explicitly exported to be used by other files."
    },
    {
      "question": "How are modules classified in older versions of TypeScript?",
      "answer": "Historically, TypeScript classified modules into two types: 'Internal Modules' (now called Namespaces), which grouped related code into a single global object, and 'External Modules' (now just called Modules), which relied on file-based import/export statements. Today, modern ES6 Modules are the industry standard, and namespaces are rarely used."
    },
    {
      "question": "What is the use of the tsconfig.json file?",
      "answer": "The `tsconfig.json` file is the central configuration file for a TypeScript project. It marks the root directory of the project and dictates compiler settings, such as which files to include/exclude, the target JavaScript version (e.g., ES5, ES2022), the module resolution strategy, and strictness rules."
    },
    {
      "question": "What are Decorators in TypeScript?",
      "answer": "Decorators are a structural design pattern used to add metadata or modify the behavior of classes, methods, or properties at design time. Declared with the `@` symbol (e.g., `@Injectable()`), they are effectively higher-order functions that take the target element as an argument and return a modified version. They are heavily used in frameworks like Angular."
    },
    {
      "question": "How do you debug a TypeScript file?",
      "answer": "Because browsers execute JavaScript, not TypeScript, debugging requires mapping the executed JavaScript back to your original TypeScript code. You do this by compiling with source maps enabled, using `tsc --sourceMap`. This generates a `.js.map` file, allowing browser DevTools or IDEs like VS Code to step through the original TypeScript code."
    },
    {
      "question": "Describe anonymous functions and their uses in TypeScript.",
      "answer": "Anonymous functions are functions declared without a name identifier. They are frequently used as inline callbacks, such as passing a function directly into `setTimeout()` or an array method like `map()`. In TypeScript, the parameters of an anonymous callback are often contextually typed by the compiler based on where the function is used."
    },
    {
      "question": "Is it possible to call the constructor of a base class from a child class?",
      "answer": "Yes. When implementing inheritance, if the child class defines its own constructor, it is mandatory to call `super()` inside that child constructor before accessing the `this` keyword. The `super()` method executes the constructor logic of the parent (base) class."
    },
    {
      "question": "How do you combine multiple TypeScript files into a single JavaScript file?",
      "answer": "If you are using AMD or System module architectures, you can concatenate output using the `--outFile` compiler flag. For example: `tsc --outFile bundle.js app.ts util.ts`. However, in modern web development using ES Modules or CommonJS, bundlers like Webpack, Vite, or esbuild are used to combine files instead of the tsc compiler."
    },
    {
      "question": "Explain the 'typeof' operator in TypeScript.",
      "answer": "The 'typeof' operator has dual purposes in TypeScript. In standard runtime code, it returns a string indicating the JavaScript type of a variable (e.g., 'string' or 'object'). In a TypeScript type context, it extracts the inferred shape/type of an existing variable so you can assign that exact same type structure to a new variable."
    },
    {
      "question": "How do you run a TypeScript file from the terminal?",
      "answer": "You generally have two options. You can compile it first using `tsc filename.ts` and then run the output using Node.js: `node filename.js`. Alternatively, for local development and testing, you can use tools like `ts-node` or `tsx` to execute TypeScript files directly in one step without manually generating a JS file."
    },
    {
      "question": "Which principles of Object-Oriented Programming are supported by TypeScript?",
      "answer": "\nTypeScript brings robust, class-based Object-Oriented Programming to JavaScript, fully supporting the four core pillars: Abstraction (hiding complex implementations behind simple interfaces), Encapsulation (bundling data and methods, protecting them with access modifiers), Inheritance (classes deriving from parent classes), and Polymorphism (methods behaving differently based on the object invoking them)."
    },
    {
      "question": "Explain Mixins in TypeScript.",
      "answer": "Mixins offer an alternative to traditional class inheritance by allowing a class to combine behaviors from multiple source components. Because a TypeScript class can only 'extend' one parent class, mixins are implemented as functions that take a base class constructor, extend it with new methods or properties, and return the new composite class."
    },
    {
      "question": "Is it possible to create immutable object properties in TypeScript?",
      "answer": "Yes, TypeScript provides the `readonly` modifier to enforce immutability on properties. When a property is prefixed with `readonly` inside an interface or class, its value can only be assigned during declaration or inside the constructor. Any subsequent attempts to reassign it will trigger a compile-time error."
    },
    {
      "question": "In what situation should you use a class versus an interface?",
      "answer": "Interfaces exist purely at compile-time and leave no trace in the compiled JavaScript; they should be used when you only need to define the shape of data or enforce a contract on an object structure. Classes result in actual JavaScript code at runtime. You should use a class when you need to instantiate objects, encapsulate actual logic, or implement inheritance."
    },
    {
      "question": "What are the structural differences between classes and interfaces?",
      "answer": "A class acts as a blueprint that can contain both method declarations and their actual implementation logic. Classes can be instantiated using the `new` keyword to create objects in memory. Interfaces contain only declarations (method signatures and property types) without any implementation logic, and they cannot be instantiated."
    },
    {
      "question": "How do you declare a class in TypeScript?",
      "answer": "You declare a class using the `class` keyword. Inside, you define properties with explicit types, an optional `constructor` to initialize those properties when the object is instantiated, and methods to handle logic. TypeScript allows you to attach access modifiers like `public` or `private` to class members to enforce encapsulation."
    },
    {
      "question": "How is inheritance implemented in TypeScript?",
      "answer": "Inheritance is implemented using the `extends` keyword. A child class extends a single parent class, inheriting all of its public and protected properties and methods. The child class can override inherited methods to provide specific functionality or call the parent's logic using the `super` keyword."
    },
    {
      "question": "What are the different ways to control the visibility of class members?",
      "answer": "TypeScript uses three access modifiers. 'public' is the default, meaning the member can be accessed from anywhere. 'private' strictly confines access to within the class where it is defined; it cannot be accessed from instances or child classes. 'protected' behaves like private, but allows access from within child classes that inherit from the base class."
    },
    {
      "question": "How do you generate a TypeScript Definition file (.d.ts)?",
      "answer": "You can generate declaration files automatically during compilation by enabling the `declaration: true` flag in your `tsconfig.json` file, or by passing the `--declaration` (or `-d`) flag via the command line: `tsc --declaration script.ts`. This generates `.d.ts` files containing only the type signatures, which is crucial for publishing libraries."
    },
    {
      "question": "Does TypeScript support static classes?",
      "answer": "TypeScript does not support the concept of entirely 'static classes' like C# does. Because standard JavaScript modules and plain objects inherently act as singletons and group related functions, creating a strictly static class is unnecessary. Instead, TypeScript supports adding the `static` keyword to individual properties and methods within a standard class."
    },
    {
      "question": "Explain Conditional Types in TypeScript.",
      "answer": "Conditional Types allow you to dynamically assign a type based on a logical condition, functioning much like a ternary operator for the type system. They use the syntax `T extends U ? X : Y`. This means if type T is assignable to type U, the resulting type is X; otherwise, the resulting type is Y. They are extremely powerful for creating flexible, generic utility types."
    }
  ],

  "Selenium Struggles": [
    {
    question: "Selenium  Zero to Hero ...!!! quick recap ",
    answer: "Selenium WebDriver (Java) Interview Cheat Sheet\nA quick recap of essential Selenium WebDriver concepts, syntax, and code snippets for interview preparation. Includes Selenium 4 updates.\n\n1. WebDriver Initialization & Options\nModern initialization (Selenium 4+ handles driver executables automatically, no need for System.setProperty or WebDriverManager in most cases).\n\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport org.openqa.selenium.chrome.ChromeOptions;\n\n// Basic Initialization\nWebDriver driver = new ChromeDriver();\n\n// Initialization with Options (Headless, Incognito, etc.)\nChromeOptions options = new ChromeOptions();\noptions.addArguments(\"--headless\"); // Run without UI\noptions.addArguments(\"--incognito\");\noptions.addArguments(\"start-maximized\");\noptions.addArguments(\"--disable-notifications\"); // Block location/mic prompts\n\nWebDriver driver = new ChromeDriver(options);\n\n2. Navigation Commands\ndriver.get(\"https://www.google.com\"); // Waits till page loads fully\ndriver.navigate().to(\"https://www.google.com\"); // Maintains browser history\ndriver.navigate().back();\ndriver.navigate().forward();\ndriver.navigate().refresh();\n\n3. Locators\nFinding elements on the web page.\n\n// Standard Locators\ndriver.findElement(By.id(\"elementId\"));\ndriver.findElement(By.name(\"elementName\"));\ndriver.findElement(By.className(\"className\"));\ndriver.findElement(By.tagName(\"h1\"));\ndriver.findElement(By.linkText(\"Click Here\"));\ndriver.findElement(By.partialLinkText(\"Click\"));\ndriver.findElement(By.cssSelector(\"#id .class\"));\ndriver.findElement(By.xpath(\"//tagname[@attribute='value']\"));\n\n// Selenium 4 Relative Locators\nimport static org.openqa.selenium.support.locators.RelativeLocator.with;\nWebElement email = driver.findElement(By.id(\"email\"));\nWebElement password = driver.findElement(with(By.tagName(\"input\")).below(email));\n\n4. Web Element Interactions\nWebElement element = driver.findElement(By.id(\"myId\"));\n\nelement.click();\nelement.sendKeys(\"Text to type\");\nelement.clear(); // Clears text from input\nString text = element.getText(); // Gets visible text\nString attribute = element.getAttribute(\"value\"); // Gets attribute value\n\n// Verifications\nboolean isDisp = element.isDisplayed(); // Is it visible?\nboolean isEnab = element.isEnabled();   // Is it active?\nboolean isSel = element.isSelected();   // Is the checkbox/radio checked?\n\n5. Dropdowns (Select Box)\nUsed for <select> tags only.\n\nimport org.openqa.selenium.support.ui.Select;\n\nWebElement dropdownElement = driver.findElement(By.id(\"dropdown\"));\nSelect dropdown = new Select(dropdownElement);\n\ndropdown.selectByIndex(1);\ndropdown.selectByValue(\"usa\");\ndropdown.selectByVisibleText(\"United States\");\n\n// For multi-select dropdowns\ndropdown.deselectAll();\nboolean isMulti = dropdown.isMultiple();\n\n6. Synchronization (Waits)\nCrucial for handling dynamic elements.\n\nImplicit Wait: Applied globally for the lifetime of the WebDriver instance.\ndriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));\n\nExplicit Wait: Applied to a specific element until a condition is met.\nimport org.openqa.selenium.support.ui.WebDriverWait;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\n\nWebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));\nWebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(\"myId\")));\nwait.until(ExpectedConditions.elementToBeClickable(By.id(\"myId\"))).click();\n\nFluent Wait: Similar to Explicit but allows polling frequency and ignoring specific exceptions.\nWait<WebDriver> fluentWait = new FluentWait<>(driver)\n    .withTimeout(Duration.ofSeconds(30))\n    .pollingEvery(Duration.ofSeconds(5))\n    .ignoring(NoSuchElementException.class);\n\nWebElement element = fluentWait.until(d -> d.findElement(By.id(\"myId\")));\n\n7. Alerts and Pop-ups (JavaScript)\nAlert alert = driver.switchTo().alert();\nString alertText = alert.getText();\nalert.sendKeys(\"Text for prompt\"); // Type into prompt alert\nalert.accept();  // Click OK\nalert.dismiss(); // Click Cancel\n\n8. Frames and Iframes\n// Switch to frame\ndriver.switchTo().frame(0); // By Index\ndriver.switchTo().frame(\"frameNameOrId\"); // By Name or ID\ndriver.switchTo().frame(driver.findElement(By.cssSelector(\"iframe.main\"))); // By WebElement\n\n// Switch back to the main document\ndriver.switchTo().defaultContent();\n\n// Switch to parent frame (Nested frames)\ndriver.switchTo().parentFrame();\n\n9. Multiple Windows & Tabs\nString mainWindow = driver.getWindowHandle(); // Get current window ID\nSet<String> allWindows = driver.getWindowHandles(); // Get all open window IDs\n\nfor (String windowHandle : allWindows) {\n    if (!windowHandle.equals(mainWindow)) {\n        driver.switchTo().window(windowHandle);\n        break; // Switch to the first new window found\n    }\n}\n\n// Switch back to main\ndriver.switchTo().window(mainWindow);\n\n// Selenium 4: Open new tab or window and automatically switch to it\ndriver.switchTo().newWindow(WindowType.TAB);\ndriver.switchTo().newWindow(WindowType.WINDOW);\n\n10. Actions Class (Mouse & Keyboard)\nUsed for advanced user interactions like hover, drag-and-drop, and right-click.\n\nimport org.openqa.selenium.interactions.Actions;\n\nActions actions = new Actions(driver);\nWebElement element = driver.findElement(By.id(\"menu\"));\n\n// Mouse Hover\nactions.moveToElement(element).perform();\n\n// Right Click (Context Click)\nactions.contextClick(element).perform();\n\n// Double Click\nactions.doubleClick(element).perform();\n\n// Drag and Drop\nWebElement source = driver.findElement(By.id(\"draggable\"));\nWebElement target = driver.findElement(By.id(\"droppable\"));\nactions.dragAndDrop(source, target).perform();\n\n// Keyboard actions (Send SHIFT + text)\nactions.keyDown(Keys.SHIFT).sendKeys(\"uppercase\").keyUp(Keys.SHIFT).perform();\n\n11. JavaScript Executor\nUseful when standard WebDriver clicks/scrolls fail (e.g., element intercepted).\n\nimport org.openqa.selenium.JavascriptExecutor;\n\nJavascriptExecutor js = (JavascriptExecutor) driver;\n\n// Click an element using JS\nWebElement button = driver.findElement(By.id(\"btn\"));\njs.executeScript(\"arguments[0].click();\", button);\n\n// Scroll into view\njs.executeScript(\"arguments[0].scrollIntoView(true);\", button);\n\n// Scroll to bottom of page\njs.executeScript(\"window.scrollTo(0, document.body.scrollHeight)\");\n\n// Send text using JS\njs.executeScript(\"arguments[0].value='Hello';\", driver.findElement(By.id(\"inputBox\")));\n\n12. Cookies Management\nimport org.openqa.selenium.Cookie;\n\n// Add Cookie\nCookie myCookie = new Cookie(\"Token\", \"123456789\");\ndriver.manage().addCookie(myCookie);\n\n// Get Cookie\nCookie getCookie = driver.manage().getCookieNamed(\"Token\");\nSet<Cookie> allCookies = driver.manage().getCookies();\n\n// Delete Cookies\ndriver.manage().deleteCookieNamed(\"Token\");\ndriver.manage().deleteAllCookies();\n\n13. Taking Screenshots\nimport org.openqa.selenium.TakesScreenshot;\nimport org.openqa.selenium.OutputType;\nimport org.apache.commons.io.FileUtils; // Requires Apache Commons IO dependency\nimport java.io.File;\n\n// Full Page Screenshot\nTakesScreenshot ts = (TakesScreenshot) driver;\nFile source = ts.getScreenshotAs(OutputType.FILE);\nFile target = new File(\"./screenshots/fullpage.png\");\nFileUtils.copyFile(source, target);\n\n// Selenium 4: Element Specific Screenshot\nWebElement logo = driver.findElement(By.id(\"logo\"));\nFile logoSource = logo.getScreenshotAs(OutputType.FILE);\nFileUtils.copyFile(logoSource, new File(\"./screenshots/logo.png\"));\n\n14. Listeners\nListeners are used to generate logs, customize reports, or capture screenshots on test failure.\n\nA. TestNG Listeners (ITestListener)\nUsed mostly in frameworks to listen to test outcomes.\n\nimport org.testng.ITestListener;\nimport org.testng.ITestResult;\n\npublic class MyTestListener implements ITestListener {\n    @Override\n    public void onTestFailure(ITestResult result) {\n        System.out.println(\"Test Failed: \" + result.getName());\n        // Add code to take screenshot here\n    }\n    \n    @Override\n    public void onTestSuccess(ITestResult result) {\n        System.out.println(\"Test Passed: \" + result.getName());\n    }\n}\n// Apply in test class: @Listeners(MyTestListener.class)\n\nB. WebDriver Listeners (Selenium 4 WebDriverListener)\nListens to WebDriver events (before/after click, findElement, etc.).\n\nimport org.openqa.selenium.support.events.WebDriverListener;\nimport org.openqa.selenium.support.events.EventFiringDecorator;\n\npublic class MyWebDriverListener implements WebDriverListener {\n    @Override\n    public void beforeClick(WebElement element) {\n        System.out.println(\"Clicking on element: \" + element.getText());\n    }\n}\n\n// Registering the listener in the setup:\nWebDriver driver = new ChromeDriver();\nMyWebDriverListener listener = new MyWebDriverListener();\nWebDriver decoratedDriver = new EventFiringDecorator<>(listener).decorate(driver);\n\n// Now use `decoratedDriver` for your tests\n\n15. Closing the Browser\ndriver.close(); // Closes the current window/tab that WebDriver is focused on\ndriver.quit();  // Closes all windows/tabs and safely terminates the WebDriver session"
    },
    {
      "question": "What is Selenium?",
      "answer": "Selenium is a widely used open-source tool for Testing Web-Based Applications that checks if they are performing as expected. It is a prominent preference amongst testers for Cross-Browser Testing and is viewed as one of the most reliable systems for Web Application Automation. It is platform-independent, works on all major operating systems, and supports scripts written in various programming languages like Java, Python, and C#."
    },
    {
      "question": "What are the Selenium suite components?",
      "answer": "There are four major components of the Selenium suite:\n\n1. Selenium IDE: A browser extension that serves as an innovative toolkit for web testing, allowing users to record and playback interactions with web applications.\n\n2. Selenium RC (Remote Control): One of the earliest Selenium tools, preceding WebDriver. It allowed testers to write automated tests in various languages using a server as an intermediary between the code and the browser.\n\n3. Selenium WebDriver: A robust framework providing a programming interface to interact directly with web browsers without an intermediary server, enabling seamless browser automation.\n\n4. Selenium Grid: A server that allows tests to be executed across multiple web browser instances running on remote machines concurrently, using a hub-and-node architecture."
    },
    {
      "question": "Mention the advantages of using Selenium as an automation tool.",
      "answer": "Selenium is highly preferred because it is an open-source and free framework. It supports multiple programming languages (Java, Python, C#, etc.) and platforms (Windows, macOS, Linux). It offers easy compatibility with various browsers (Chrome, Firefox, Safari) and provides flexible frameworks that enable code reusability and support integrated, parallel test execution."
    },
    {
      "question": "What is test automation or automation testing?",
      "answer": "Automated Testing means using specialized software tools to execute pre-scripted tests on a software application before it is released into production. It replaces manual human interaction with automated scripts, making it highly valuable in Agile and DevOps methodologies for continuous integration and delivery."
    },
    {
      "question": "What are the advantages of automation testing?",
      "answer": "Automation testing simplifies test case execution, allowing tests to run unattended. It improves the reliability of tests by ensuring consistent execution. It significantly increases test coverage, allowing for the testing of complex features and detecting more bugs. By minimizing human interaction, it reduces the chance of manual errors. Finally, it saves time and money in the long run by providing faster feedback and enabling the earlier detection of defects."
    },
    {
      "question": "What is Selenese? How is it classified?",
      "answer": "Selenese refers to the set of commands used in Selenium IDE to perform operations on web elements. They are classified into three categories:\n\n1. Actions: Commands that manipulate the state of the application (e.g., clicking a button, typing text).\n2. Accessors: Commands used to examine the state of the application and store the result in a variable.\n3. Assertions: Commands that verify if the application's state matches the expected state (e.g., verifying text is present)."
    },
    {
      "question": "What is the difference between Selenium 2.0 and Selenium 3.0?",
      "answer": "Selenium 2.0 merged the original Selenium RC project with the newer WebDriver API, making WebDriver the core of the framework while keeping RC for backward compatibility. Selenium 3.0 completely dropped support for the outdated Selenium RC core, relying entirely on the WebDriver API. It brought major bug fixes, increased stability, and became the W3C standard for browser automation."
    },
    {
      "question": "What are the testing types supported by Selenium?",
      "answer": "Selenium primarily supports Functional Testing and Regression Testing.\n\nFunctional Testing verifies that each function of the software works according to the requirements, involving inputting data, computing expected outcomes, and comparing actual versus expected results.\n\nRegression Testing ensures that recent code modifications haven't adversely affected existing features. Selenium automates these repetitive suites so they can be run efficiently after every update."
    },
    {
      "question": "What are the different types of annotations used in TestNG with Selenium?",
      "answer": "Common TestNG annotations include:\n@BeforeSuite / @AfterSuite: Runs before/after all tests in a suite.\n@BeforeTest / @AfterTest: Runs before/after any test method belonging to the classes inside the <test> tag.\n@BeforeClass / @AfterClass: Runs before/after the first method of the current class.\n@BeforeMethod / @AfterMethod: Runs before/after each individual @Test method.\n@BeforeGroups / @AfterGroups: Runs before/after methods belonging to a specific group."
    },
    {
      "question": "What are the types of Web locating strategies?",
      "answer": "Selenium provides 8 standard locating strategies:\n1. By ID: `driver.find_element(By.ID, \"element_id\")`\n2. By Class Name: `driver.find_element(By.CLASS_NAME, \"class_name\")`\n3. By Name: `driver.find_element(By.NAME, \"element_name\")`\n4. By Tag Name: `driver.find_element(By.TAG_NAME, \"tag_name\")`\n5. By CSS Selector: `driver.find_element(By.CSS_SELECTOR, \"css_selector\")`\n6. By XPath: `driver.find_element(By.XPATH, \"xpath_expression\")`\n7. By Link Text: `driver.find_element(By.LINK_TEXT, \"exact_link_text\")`\n8. By Partial Link Text: `driver.find_element(By.PARTIAL_LINK_TEXT, \"partial_text\")`"
    },
    {
      "question": "What are the types of waits supported by WebDriver?",
      "answer": "WebDriver supports three types of waits:\n1. Implicit Wait: Tells the WebDriver to poll the DOM for a certain amount of time globally when trying to find any element if it's not immediately available.\n2. Explicit Wait: Pauses the script execution until a specific expected condition is met (e.g., waiting for an element to be clickable).\n3. Fluent Wait: An advanced explicit wait that allows you to specify the maximum time to wait, the polling frequency, and the specific exceptions to ignore while polling."
    },
    {
      "question": "Mention the types of navigation commands.",
      "answer": "Navigation commands allow WebDriver to move through browser history. They include:\n1. `to(String url)`: Loads a new web page in the current window.\n2. `back()`: Moves back one step in the browser's history.\n3. `forward()`: Moves forward one step in the browser's history.\n4. `refresh()`: Reloads the current web page."
    },
    {
      "question": "What is the Difference Between driver.close() and driver.quit()?",
      "answer": "The `driver.close()` command is window-specific; it only closes the active window or tab currently in focus. It does not terminate the WebDriver session completely unless it's the only window open. Conversely, `driver.quit()` is session-specific. It closes every single open window and tab associated with that session, safely terminating the WebDriver instance and releasing all memory and background resources."
    },
    {
      "question": "Differentiate Between Manual Testing and Automated Testing.",
      "answer": "In Manual Testing, test cases are executed step-by-step by a human tester. It requires more time, consumes human resources, and does not require coding frameworks. However, it is the only way to perform exploratory and usability testing. In Automated Testing, test cases are executed by software tools. It is significantly faster, requires programming knowledge to build frameworks (like Data-Driven frameworks), and eliminates human error, but it cannot perform random exploratory testing."
    },
    {
      "question": "What is an Absolute XPath and Relative XPath?",
      "answer": "Absolute XPath provides the complete path from the root node (`<html>`) all the way down to the desired element, starting with a single forward slash `/`. It is highly brittle and easily breaks if the page structure changes. Relative XPath starts from anywhere in the document using a double forward slash `//`. It locates elements based on attributes rather than exact positioning, making it much more robust and preferred for automation."
    },
    {
      "question": "What are the limitations of Selenium testing?",
      "answer": "Selenium's limitations include:\n1. No official tech support since it is open-source.\n2. It only supports web applications; testing mobile or desktop apps requires external tools like Appium.\n3. It cannot perform image-based testing or captcha reading natively.\n4. It requires integration with frameworks like TestNG or JUnit for reporting and test management.\n5. It requires programming knowledge to write and maintain the scripts."
    },
    {
      "question": "What is the same-origin policy and how is it handled?",
      "answer": "The Same-Origin Policy is a browser security feature that prevents a script loaded from one origin from interacting with a resource from another origin (different domain, protocol, or port). Historically, Selenium RC handled this by using an HTTP proxy server that tricked the browser into believing the Selenium Core and the web application belonged to the same origin. Modern Selenium WebDriver circumvents this by communicating directly with the browser natively."
    },
    {
      "question": "What makes Selenium such a widely used testing tool?",
      "answer": "Selenium is widely used because it is free, open-source, and platform-independent (Windows, Mac, Linux). It supports all major browsers (Chrome, Firefox, Safari, Edge) and allows testers to write scripts in popular programming languages like Java, Python, C#, and JavaScript. It also integrates seamlessly with CI/CD tools like Jenkins and build tools like Maven."
    },
    {
      "question": "Why is it advised to select Selenium for web testing?",
      "answer": "Selenium is advised because it requires no licensing fees, offers incredible flexibility in language and browser choices, and has a massive community for troubleshooting. It consumes minimal hardware resources, integrates perfectly with TestNG for advanced reporting, and can distribute tests across multiple machines simultaneously using Selenium Grid to save execution time."
    },
    {
      "question": "What is an exception test in Selenium?",
      "answer": "An exception test verifies that your code throws the correct error under specific conditions. In TestNG, you can use the `expectedExceptions` parameter inside the `@Test` annotation. If the test throws that exact exception, the test passes. If it doesn't, it fails.\n\n```java\n@Test(expectedExceptions = ArithmeticException.class)\npublic void testDivideByZero() {\n    int result = 10 / 0; // Test passes because this throws the expected exception\n}\n```"
    },
    {
      "question": "How to wait until a web page has been loaded completely in Selenium?",
      "answer": "To ensure a page is completely loaded, you should use Explicit Waits along with the `ExpectedConditions` class to wait for specific elements to become visible or clickable. Additionally, you can execute a JavaScript script `return document.readyState` and wait until it equals `\"complete\"`."
    },
    {
      "question": "What is Selenium WebDriver?",
      "answer": "Selenium WebDriver is an open-source framework and API that allows you to execute cross-browser tests. It interacts natively with the browser, just as a real user would, providing a more robust and realistic automation approach than the older JavaScript-injected Selenium RC."
    },
    {
      "question": "Is Selenium WebDriver a library?",
      "answer": "Yes, Selenium WebDriver is an API and a library of code (provided as JAR files in Java or packages in Python/Node) that you import into your project to send commands to the browser."
    },
    {
      "question": "Which browsers are supported by Selenium Webdriver?",
      "answer": "Selenium WebDriver supports Google Chrome (via ChromeDriver), Mozilla Firefox (via GeckoDriver), Microsoft Edge (via EdgeDriver), Apple Safari (via SafariDriver), and Opera."
    },
    {
      "question": "Explain Selenium 4 and why it is different from other versions.",
      "answer": "Selenium 4 is the latest major release that completely adopted the W3C WebDriver standard, dropping the legacy JSON Wire Protocol. This means communication between the code and browser is now direct and native, reducing flakiness. It also introduced Relative Locators (above, below, near), native support for Chrome DevTools Protocol (CDP) for intercepting network requests, and an overhauled Selenium Grid."
    },
    {
      "question": "What will happen if I execute this command: driver.get()?",
      "answer": "The `driver.get(\"URL\")` command commands the browser to navigate to the specified URL and waits for the page to fully load before returning control back to your test script."
    },
    {
      "question": "What is an alternative to the driver.get() method?",
      "answer": "An alternative is `driver.navigate().to(\"URL\")`. While it achieves the same result of opening a web page, the `Maps()` interface also allows you to move backward, forward, and refresh the page using the browser's history."
    },
    {
      "question": "Is it possible to test APIs using Selenium Webdriver?",
      "answer": "No. Selenium WebDriver interacts specifically with the Document Object Model (DOM) of web browsers. It cannot send raw HTTP requests to test REST or SOAP APIs directly. You would need to integrate an API testing library (like REST Assured in Java or Requests in Python) alongside Selenium."
    },
    {
      "question": "Mention different ways of locating an element in Selenium.",
      "answer": "Elements can be located using eight locator strategies: By.id(), By.name(), By.className(), By.tagName(), By.linkText(), By.partialLinkText(), By.cssSelector(), and By.xpath()."
    },
    {
      "question": "How can we move to the nth-child element using XPath?",
      "answer": "You can locate the nth-child by grouping your XPath expression and appending an index bracket. For example: `(//div[@class='item'])[3]` selects the third div with the class 'item'."
    },
    {
      "question": "How to type text in an input box using Selenium?",
      "answer": "To type text into an input box, you locate the web element and use the `sendKeys()` method. \n\n```java\nWebElement inputBox = driver.findElement(By.id(\"username\"));\ninputBox.sendKeys(\"my text input\");\n```"
    },
    {
      "question": "How to scroll down a page using JavaScript?",
      "answer": "Since Selenium doesn't have a direct scroll command, you cast the driver to a `JavascriptExecutor` and use the `window.scrollBy` function.\n\n```java\nJavascriptExecutor js = (JavascriptExecutor) driver;\n// Scrolls vertically down by 1000 pixels\njs.executeScript(\"window.scrollBy(0, 1000)\");\n```"
    },
    {
      "question": "How to click on a hyperlink in Selenium?",
      "answer": "You can locate and click a hyperlink using `linkText` (requires exact match) or `partialLinkText` (requires only a substring of the text).\n\n```java\n// Exact match\ndriver.findElement(By.linkText(\"Contact Us\")).click();\n\n// Partial match\ndriver.findElement(By.partialLinkText(\"About\")).click();\n```"
    },
    {
      "question": "How to assert the title of a webpage?",
      "answer": "You retrieve the title using `driver.getTitle()` and compare it against your expected string using testing assertions.\n\n```java\nString actualTitle = driver.getTitle();\nString expectedTitle = \"My Website Title\";\nAssert.assertEquals(actualTitle, expectedTitle);\n```"
    },
    {
      "question": "How to mouse hover over a web element?",
      "answer": "Hovering is an advanced user interaction handled by the `Actions` class.\n\n```java\nActions action = new Actions(driver);\nWebElement element = driver.findElement(By.id(\"menu\"));\naction.moveToElement(element).perform();\n```"
    },
    {
      "question": "How to retrieve CSS properties of an element?",
      "answer": "You use the `getCssValue()` method on a WebElement, passing the exact CSS property name you want to inspect.\n\n```java\nString bgColor = driver.findElement(By.id(\"header\")).getCssValue(\"background-color\");\n```"
    },
    {
      "question": "What is POM (Page Object Model)?",
      "answer": "Page Object Model is a design pattern in Selenium where web pages are represented as classes, and the elements on those pages are defined as variables within the class. This separates the testing logic from the element locators, making the code highly reusable, readable, and easy to maintain."
    },
    {
      "question": "Can Captcha be automated?",
      "answer": "No, Captcha is specifically designed to block automated bots. To test environments with Captcha, teams generally ask developers to temporarily disable the Captcha in lower environments, configure a static mock Captcha, or add an API hook to bypass it during test execution."
    },
    {
      "question": "How does Selenium handle Windows-based pop-ups?",
      "answer": "Selenium natively only controls web-based pop-ups and alerts. It cannot interact with OS-level dialog boxes (like standard Windows file upload/download prompts). To handle these, you must integrate third-party tools like AutoIt or the Java Robot class."
    },
    {
      "question": "How to take screenshots in WebDriver?",
      "answer": "You must cast the driver to `TakesScreenshot`, call `getScreenshotAs()`, and then save the resulting file.\n\n```java\nTakesScreenshot screenshot = (TakesScreenshot) driver;\nFile sourceFile = screenshot.getScreenshotAs(OutputType.FILE);\nFileUtils.copyFile(sourceFile, new File(\"./screenshot.png\"));\n```"
    },
    {
      "question": "Why do testers choose Selenium over QTP/UFT?",
      "answer": "Selenium is free and open-source, whereas QTP (now UFT) is a heavily licensed commercial tool. Selenium supports multiple languages (Java, Python, C#) while QTP primarily relies on VBScript. Additionally, Selenium can execute on Mac and Linux, whereas QTP is restricted to Windows."
    },
    {
      "question": "What are Data-Driven and Keyword-Driven frameworks?",
      "answer": "A Data-Driven framework separates the test script from the test data (stored in Excel, CSV, or DBs), allowing the same test script to run multiple times with different inputs. A Keyword-Driven framework abstracts the code into simple keywords (like 'Click', 'Login') stored in a spreadsheet, allowing non-programmers to write automated test steps."
    },
    {
      "question": "What is the difference between getWindowHandle() and getWindowHandles()?",
      "answer": "`getWindowHandle()` returns a single alphanumeric string representing the unique identifier of the currently active browser window. `getWindowHandles()` returns a `Set<String>` containing the unique identifiers of all currently open windows or tabs managed by that WebDriver session."
    },
    {
      "question": "What is a Selenium Maven project?",
      "answer": "A Selenium Maven project utilizes Apache Maven, a build automation tool. Instead of manually downloading and configuring JAR files, you declare dependencies (like Selenium, TestNG) in a `pom.xml` file. Maven automatically downloads these libraries, handles their versions, and standardizes the project compilation process."
    },
    {
      "question": "What is an Object Repository?",
      "answer": "An Object Repository is a centralized location (often a properties file, XML file, or Page Object class) where all element locators are stored. Instead of hardcoding locators directly inside test methods, tests reference the repository. If an element's ID changes on the website, you only update it once in the repository."
    },
    {
      "question": "How do you Locate Elements using XPath?",
      "answer": "XPath navigates through the XML/HTML structure. Absolute XPath (e.g., `/html/body/div[1]/form`) traces the exact route from the root. Relative XPath (e.g., `//input[@id='username']`) jumps directly to the matching element regardless of its exact hierarchy position, making it much more reliable."
    },
    {
      "question": "How can you Handle Multiple Windows in Selenium?",
      "answer": "When clicking a link opens a new tab, you must explicitly switch the driver's focus to the new window using its unique ID.\n http://googleusercontent.com/immersive_entry_chip/0 \nhttp://googleusercontent.com/immersive_entry_chip/1"
}
  ]}