# 🚀 Reddit Keyword Search - React.JS Application

An intuitive and dynamic Reddit search application built with the **React.JS**. This app allows users to search specific subreddits for posts containing certain keywords and filter results by date ranges like **Today**, **Yesterday**, or **This Week**. Perfect for staying up-to-date with the latest trends and topics on Reddit!

---

## 🌍 Live Demo

[**Check out the live demo**](https://example.com)

---

## 🌟 Features

- 🔍 **Search Subreddits by Keywords**  
  Find posts from any subreddit that match your search keywords.

- 🗂 **Dynamic Filters**  
  Filter posts by date ranges:
  - **All Posts**
  - **Today**
  - **Yesterday**
  - **This Week**

- 📦 **Optimized MERN Architecture**  
  Leverages the power of **MongoDB**, **Express.js**, **React.js**, and **Node.js** for a seamless experience.

- 📱 **Responsive Design**  
  Fully functional on both desktop and mobile devices.

- 🛠 **Reddit API Integration**  
  Fetches live data directly from Reddit using the Reddit API.

---

## 🔧 Technologies Used

| Frontend         | Backend     | Others        |
|------------------|-------------|---------------|
| React.js         | Node.js     | Reddit API    |
| Material UI      | Express.js  | Axios         |
| CSS3             |             | React Router  |

---

## 🚀 Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/exclusiveabhi/react-redditKeywordSearch.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd react-redditKeywordSearch
   ```

3. **Install Dependencies**
   - Install frontend dependencies:
     ```bash
     cd frontend 
     npm install
     ```
   - Install backend dependencies:
     ```bash
     cd ../backend && npm install
     ```

4. **Start the Application**
   - Start the backend server:
     ```bash
     node index.js
     ```
   - Start the frontend application:
     ```bash
     cd ../frontend && npm start
     ```

5. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000`.

---

## ⚡ API Endpoints

### `/api/reddit/search`
- **Method**: GET  
- **Parameters**:
  - `subreddit`: Subreddit name (e.g., `javascript`)
  - `keyword`: Keyword to search for (e.g., `react`)

---

## 📜 How to Use

1. Enter a **Subreddit** (e.g., `javascript`).
2. Enter a **Keyword** (e.g., `react`).
3. Hit the **Search** button.
4. Use the filter dropdown to refine your results by date range.

---

## 🛠 Future Enhancements

- 🔧 Add pagination for large result sets.
- 🔍 Include support for multiple keywords.
- 📊 Provide analytics on keyword popularity in subreddits.

---

## 🤝 Contributing

We welcome contributions! Follow these steps:  
1. Fork this repository.  
2. Create a feature branch: `git checkout -b feature-name`.  
3. Commit changes: `git commit -m 'Add feature-name'`.  
4. Push to branch: `git push origin feature-name`.  
5. Submit a pull request.

---

## 📧 Contact

Have questions or suggestions? Reach out:  

- **GitHub**: [Abhishek](https://github.com/exclusiveabhi)  