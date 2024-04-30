import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { UserProvider } from "./context/UserContext"
import HomePage from "./pages/HomePage"
import MyOffersPage from "./pages/MyOffersPage"
import DetailsPage from "./pages/DetailsPage"
import OffersFormPage from "./pages/OffersFormPage"
import ProtectedRoute from "./ProtectedRoute"
import { OfferProvider } from "./context/OfferContext"
import Navbar from "./components/Navbar"

function App() {

  return (
    <UserProvider>
      <OfferProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
              <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/myOffers" element={<MyOffersPage />} />
                  <Route path="/details/:id" element={<DetailsPage />} />
                  <Route path="/offer" element={<OffersFormPage />} />
                  <Route path="/offer/:id" element={<OffersFormPage />} />
                </Route>
              </Routes>
          </main>
        </BrowserRouter>
      </OfferProvider>
    </UserProvider>
  )
}

export default App