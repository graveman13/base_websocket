import { io } from "socket.io-client";

export const socket = io("http://localhost:5000/socket.io/?EIO=4&transport=websocket");

export const navItems = [
  {
    to: '/users',
    title: 'Users',
  },
  {
    to: '/get_user',
    title: 'Get users',
  },
  {
    to: '/add_user',
    title: 'Add user',
  },
  {
    to: '/update_user',
    title: 'Update users',
  },
  {
    to: '/delete_user',
    title: 'Delete user',
  },
]