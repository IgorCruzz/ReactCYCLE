import 'babel-polyfill'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router';
import * as redux from 'react-redux'
import 'next/link'
import React from 'react'
import Header from '../../components/header'

jest.mock('react-redux')

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

jest.mock("next/link", () => {
  return ({children}) => {
      return children;
  }
});

describe('Header', () => {
  it('should be able to render with user signed', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: true,
        profile: {
          name: 'username'
        }
      },
      cart: {
        cart: []
      }
    }))

    expect(render(<Header />)).toBeTruthy()
  })

  it('should be able to  show how many product has in the cart', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: [{
          id: 1,
          avatar_url: "avatar_url",
          price: 99,
          name: "productName",
          quantity: 40
        }]
      }
    }))

    render(<Header />)

    expect(screen.getByTestId("productCounter")).toBeInTheDocument() 
  })
  
  it('should be able to render with no user signed', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    expect(render(<Header />)).toBeTruthy()
  })

  it('should be able to show sign data in a mobile version', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))
    render(<Header />)

    userEvent.click(screen.getByTestId("join"))

    expect(screen.getByTestId("sign-data")).toBeInTheDocument()
    expect(screen.getByTestId("login-modal")).toBeInTheDocument() 
  })
  
  it('should be able to logout at web version', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: true,
        profile: {
          name: 'username'
        }
      },
      cart: {
        cart: []
      }
    }))

    jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn())

    render(<Header />)

    userEvent.click(screen.getByTestId("logout"))
  })

  it('should be able to logout at mobile version', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: true,
        profile: {
          name: 'username'
        }
      },
      cart: {
        cart: []
      }
    }))

    jest.spyOn(redux, 'useDispatch').mockReturnValue(jest.fn())

    render(<Header />)

    userEvent.click(screen.getByTestId("logout-mobile"))

    expect(screen.getByTestId("profile-data")).toBeInTheDocument()
 
  })

  it('should be able to search a certain product', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    const mockRouter = {
      push: jest.fn()
    }

    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(<Header />) 

    userEvent.type(screen.getByTestId("search-product"), "product")

    userEvent.click(screen.getByTestId("search-product-button"))

    
    
    expect(mockRouter.push).toHaveBeenCalledWith('/search')
  })

  it('should be able to open Login modal', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)
  
    userEvent.click(screen.getByTestId("open-modal"))

    expect(screen.getByTestId("login-modal")).toBeInTheDocument()   
  })

  it('should be able to close Login modal', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("open-modal"))
 
    userEvent.click(screen.getByTestId("close-modal"))  
  })

  it('should be able to open hamburguer menu', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))

    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument()
  }) 

  it('should be able to shows the username of an user signed', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: true,
        profile: {
          name: 'username'
        }
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))

    expect(screen.getByTestId("username")).toBeInTheDocument()
   
  })

  it('should be able to search a certain product into the hamburguer menu', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    const mockRouter = {
      push: jest.fn()
    }

    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))  

    userEvent.type(screen.getByTestId("search-product-hamburguer"), "product") 
    userEvent.click(screen.getByTestId("search-product-button-hamburguer"))

    expect(mockRouter.push).toHaveBeenCalledWith('/search')
  }) 

  it('should not able to push to "/search" if not has any word are in search input into the hamburguer menu', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))  

    userEvent.type(screen.getByTestId("search-product-hamburguer"), "") 
    userEvent.click(screen.getByTestId("search-product-button-hamburguer"))

 
  })
 
  it('should be able to navigate to "/equipment" into the hamburguer menu and close it', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer")) 

    userEvent.click(screen.getByTestId("equip-link"))  
  }) 

  it('should be able to navigate to "/parts" into the hamburguer menu and close it', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))

    userEvent.click(screen.getByTestId("part-link")) 
  })  
  
  it('should be able to navigate to "/bikes" into the hamburguer menu and close it', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))

    userEvent.click(screen.getByTestId("bike-link")) 
  }) 
 
  it('should be able to navigate to "/contact" into the hamburguer menu and close it', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))

    userEvent.click(screen.getByTestId("contact-link")) 
  }) 
 
  it('should be able to close hamburguer menu', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(cb => cb({
      signIn: {
        signed: false,
        profile: []
      },
      cart: {
        cart: []
      }
    }))

    render(<Header />)

    userEvent.click(screen.getByTestId("hamburguer"))
    userEvent.click(screen.getByTestId("close-mobile-menu"))
  })   
})

 