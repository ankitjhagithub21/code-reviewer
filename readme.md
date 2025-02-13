# AI Code Reviewer

AI Code Reviewer is a web application that uses Google Gemini 2.0 Flash to analyze and review code. Built with ReactJS, NodeJS, and ExpressJS, the app helps developers improve their code quality by providing intelligent feedback and suggestions.

## 🛠️ Tech Stack

- **Frontend:** ReactJS,Prismjs,react-markdown,react-simple-code-editor
- **Backend:** NodeJS, ExpressJS
- **AI Model:** Google Gemini 2.0 Flash

## 🚀 Features

- 📑 **Code Analysis:** Analyze code for best practices, performance, and potential bugs.
- ⚡ **Real-time Feedback:** Get suggestions and improvements in real-time.
- 🔍 **Code Quality Insights:** Receive insights on code structure, readability, and maintainability.
- 🌐 **User-Friendly Interface:** Simple and intuitive interface for efficient code reviews.

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitjhagithub21/code-reviewer.git
   cd ai-code-reviewer
   ```

2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory with the following:
   ```bash
   GEMINI_API_KEY=your_google_gemini_api_key
   PORT=3000
   ORIGIN=http://localhost:5173
   ```

4. Start the application:
   ```bash
   # Start the server
   cd backend
   npm start

   # Start the client
   cd frontend
   npm start
   ```

The app will be accessible at `http://localhost:3000`.

## 🧪 Usage

1. Enter your code into the provided text area.
2. Click the "Review Code" button.
3. View AI-generated feedback and suggestions.

## ⚠️ Limitations

- Performance may depend on the AI model's response time.
- Code analysis is limited to the capabilities of Google Gemini 2.0 Flash.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, submit issues, or create pull requests.

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding!** 🚀

