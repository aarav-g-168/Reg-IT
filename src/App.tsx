import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import AppLayout from './components/Layout/AppLayout';
import { Toaster } from 'sonner';
import DashboardPage from './pages/DashboardPage'; 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout>
                  {/* CHANGE THIS LINE: */}
                  <DashboardPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster richColors theme="dark" />
    </>
  );
}

export default App;