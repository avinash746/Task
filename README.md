# CareConnect

A React Native appointment booking app where users can view a list of doctors, search by name or specialization, view doctor details, and book appointments with selected time slots.

## Features
- View a list of doctors with name, specialization, experience, rating, and location
- Search doctors by name or specialization
- View doctor details with available time slots
- Book appointments and store them locally using AsyncStorage
- Manage booking state with Redux Toolkit
- Display confirmation toasts using react-native-toast-message

## Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio or Xcode for emulator/simulator
- Java JDK (for Android)
- Watchman (for macOS)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   cd CareConnect
2. Install dependencies:
   npm install
   
## Run the Metro Bundler:
In the VS Code terminal, start the Metro bundler (React Native's JavaScript bundler):
npx react-native start
or
npx react-native start --port 8082

## Run the app:
For Android:
npx react-native run-android

For iOS:
npx react-native run-ios

## Dependencies:
@react-navigation/native
@react-navigation/stack
react-native-gesture-handler
react-native-reanimated
react-native-screens
react-native-safe-area-context
@react-native-async-storage/async-storage
@reduxjs/toolkit
react-redux
react-native-toast-message
