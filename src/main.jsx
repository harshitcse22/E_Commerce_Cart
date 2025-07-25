import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx'

// import { loadStripe } from "@stripe/stripe-js";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
      <DataProvider>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
    </ClerkProvider>
     </DataProvider>,
)
