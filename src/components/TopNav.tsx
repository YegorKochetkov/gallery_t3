import React from 'react'

export const TopNav = () => {
  return (
    <header data-main-header className='border-gray-400 border-b'>
      <h1 className='sr-only'>Gallery T3 App</h1>
      <nav
        className={`
          flex justify-between items-center p-4 w-full font-semibold text-xl
        `}
      >
        <span>TopNav</span>
        <span>Sign in</span>
      </nav>
    </header>
  )
}
