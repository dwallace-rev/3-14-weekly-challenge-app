# 3-14-weekly-challenge-app
If you want to just view my Linked List and Stack implementation alone, they are in the Entities directory.  
# Installation Instructions
This application is available for Android devices as an .apk file, the link is below.  
[Expo link for .apk file](https://expo.dev/accounts/dwallace.rev/projects/3-14-weekly-challenge-app/builds/28e9f342-811c-4da6-be2b-e7ab7e1841d4)

Alternatively, to run this application using Expo, you must have Node.js installed. 

To get started:

1. On your mobile device, install "Expo Go" from your app store.
2. Run "npm install" from the command prompt in the root directory of the repository.
3. After all dependencies are installed, running "npm start" in the command line should start the Expo development tool.
4. Open the Expo Go application, and scan the QR code present in your terminal window. Make sure your mobile device and computer are on the same wireless network.

The application should now bundle and run on your mobile device.

## Application Requirements
1) Given two singly linked lists that intersect at some point, find the intersecting node. Assume the lists are non-cyclical.

For example, given A = 3 ➔ 7 ➔ 8 ➔ 10 and B = 99 ➔ 1 ➔ 8 ➔ 10, return the node with value 8. In this example, assume nodes with the same value are the exact same node objects.

Do this in 0( m + n) time (where m and n are the lengths of the lists) and constant space.  

2) Implement a stack that has the following methods:  
• push ( val ) : push val onto the stack  
• pop: pop off and return the topmost element of the stack. If there are no elements in the stack, throw an error.  
• max: return the maximum value in the stack currently. If there are no elements in the stack, throw an error.  

Each method should run in constant time.
