import './App.css'
import Layout from './components/layout'
import HomePage from './pages/HomePage'
import BookPage from './pages/Book'
import BookList from './pages/BookList'
import Create from './pages/Create'
import MemberEdit from './pages/MemberEdit'
import Member from './pages/Member'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MemberList from './pages/MemberList'
import { Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
    
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />{/* 
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='profile' element={<ProfilePage />} /> */}
      <Route path='books' element={<BookList />} />
      <Route path='book/:id' element={<BookPage />} />
      <Route path='create' element={<Create />} />
       
      <Route path='members' element={<MemberList />} />
      <Route path='members/:id/edit' element={<MemberEdit />} />
      <Route path='members/:id' element={<Member />} />

      
    </Route>
  </Routes>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App
