# 📸 Instagram Clone

A fully responsive **Instagram Clone** built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Firebase**. This project replicates core functionalities of Instagram, providing users with an intuitive interface to share and interact with posts.

🔗 **Live Demo**: [https://instagram-clone2206.vercel.app](https://instagram-clone2206.vercel.app)

📁 **GitHub Repo**: [https://github.com/Krunal2206/Instagram-Clone](https://github.com/Krunal2206/Instagram-Clone)

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## 🚀 Features

- 🔐 **User Authentication**: Sign in with Google using Firebase Authentication.
- 🖼️ **Image Upload**: Upload images with captions; images are stored in Firebase Storage.
- 🏠 **Feed**: View a real-time feed of posts from all users.
- ❤️ **Like Posts**: Like or unlike posts; likes are updated in real-time.
- 💬 **Comments**: Add comments to posts; comments are displayed in real-time.
- 👤 **User Profiles**: View user profiles with their posts.
- 📱 **Responsive Design**: Mobile-first responsive design using Tailwind CSS.

---

## 📂 Project Structure

```bash
instagram-clone/
├── components/           # Reusable UI components (e.g., Post, Modal)
├── pages/                # Next.js routing (index.tsx, profile.tsx, etc.)
│   ├── _app.tsx
│   └── index.tsx
├── public/               # Static assets
├── styles/               # Global CSS and Tailwind setup
├── firebase.js           # Firebase config and initialization
├── tailwind.config.js    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
└── .env.local            # Environment variables for Firebase (not committed)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project setup

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Krunal2206/Instagram-Clone.git
   cd Instagram-Clone

2. **Install dependencies**:

   ```bash
   npm install

3. **Configure Firebase**:

- Create a Firebase project at https://firebase.google.com/

- Enable Authentication (Google Sign-In), Firestore Database, and Storage

- Create a .env.local file in the root directory and add your Firebase configuration:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

4. **Run the development server**:

   ```bash
   npm run dev

Open http://localhost:3000 with your browser to see the result.

---

## 🧪 Testing

To ensure the app functions as expected, follow these testing steps:

1. **Authentication**  
   - Sign in using the "Sign in with Google" option.  
   - Verify that your profile picture and name appear in the header.

2. **Post Upload**  
   - Upload a photo with a caption.
   - Check that the image appears in the feed instantly.
   - Validate that the image is stored in Firebase Storage.

3. **Real-time Feed**  
   - Open the app in two browser tabs or devices.
   - Post or interact from one tab and observe real-time updates in the other.

4. **Like & Comment**  
   - Like a post and verify that the heart icon fills.
   - Add a comment and check that it appears below the post immediately.

5. **Responsive UI**  
   - Resize the browser window or use device emulator tools.
   - Verify that layout and components adapt to mobile, tablet, and desktop views.

---

## 📈 Future Enhancements

Planned features and improvements include:

- 📸 **Stories Feature**  
  Similar to Instagram's story functionality with 24-hour expiry and swipe navigation.

- 📩 **Real-time Messaging**  
  Allow users to send direct messages using Firebase or a WebSocket-based solution.

- 🔔 **Notifications System**  
  In-app notifications for likes, comments, and follows.

- 🛠️ **User Profile Editing**  
  Enable users to update their display name, bio, and profile picture.

- 📊 **User Engagement Analytics** *(admin-only)*  
  Dashboard showing post count, likes, and active user statistics.

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can contribute:

1. **Fork** the repository
2. Create a new branch for your feature or fix:

   ```bash
   git checkout -b feature/YourFeatureName

3. Commit your changes:

   ```bash
   git commit -m "Add your meaningful commit message"

4. Push to your branch:

   ```bash
   git push origin feature/YourFeatureName

5. Create a Pull Request and describe your changes in detail
   
   Please make sure your code follows project conventions and is well-tested before submitting a pull request.

---

## 🙋‍♂️ Author

**Krunal Thakar**  
💻 Full-Stack Developer | MERN

- GitHub: [@Krunal2206](https://github.com/Krunal2206)

---
