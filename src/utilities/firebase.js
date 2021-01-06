/*
 * @Author: hhhhhq
 * @Date: 2020-12-27 15:17:43
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 15:26:54
 * @Description: file content
 */
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAidzIIZzq70HonIBDJgnviJtPESeQA9Bw",
  authDomain: "vue-full-course-4c0d5.firebaseapp.com",
  projectId: "vue-full-course-4c0d5",
  storageBucket: "vue-full-course-4c0d5.appspot.com",
  messagingSenderId: "445247630490",
  appId: "1:445247630490:web:3fc2242f38f3559a670323",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
