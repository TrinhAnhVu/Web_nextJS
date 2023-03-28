import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Badge from '@mui/material/Badge'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import PersonIcon from '@mui/icons-material/Person'
import { DataContext } from '@/store/GlobalState'
import Cookie from 'js-cookie'

function Navbar() {
	const router = useRouter()
	const { state, dispatch } = useContext(DataContext)
	const { auth, cart } = state

	const isActive = (r) => {
		if (r === router.pathname) {
			return ' active'
		} else {
			return ''
		}
	}

	const handleLogout = () => {
		Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
		localStorage.removeItem('firstLogin')
		dispatch({ type: 'AUTH', payload: {} })
		dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } })
		return router.push('/')
	}

	const adminRouter = () => {
		return (
			<>
				<Link className="dropdown-item" href="/users">
					Users
				</Link>

				<Link className="dropdown-item" href="/create">
					Products
				</Link>
				<Link className="dropdown-item" href="/categories">
					Categories
				</Link>
			</>
		)
	}

	const loggedRouter = () => {
		return (
			<li className="nav-item dropdown fix-top">
				<Link
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<img
						alt={auth.user.avatar}
						src={auth.user.avatar}
						style={{
							borderRadius: '50%',
							width: '30px',
							height: '30px',
							transform: 'translateY(-3px)',
							marginRight: '3px',
						}}
					/>
					{auth.user.name}
				</Link>
				<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<Link className="dropdown-item" href="/profile">
						Profile
					</Link>
					{
						auth.user.role === 'admin' && adminRouter()
					}
					<div className="dropdown-divider"></div>
					<button className="dropdown-item" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</li>
		)
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light ">
			<Link href="/" className="navbar-brand">
				SHOP
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link href="/cart" className={'nav-link' + isActive('/cart')}>
							<Badge badgeContent={cart.length} color="error" showZero>
								<ShoppingCartRoundedIcon />
							</Badge>
							<span style={{ paddingLeft: '8px' }}>Cart</span>
						</Link>
					</li>

					{Object.keys(auth).length === 0 ? (
						<li className="nav-item">
							<Link href="/signin" className={'nav-link' + isActive('/signin')}>
								<PersonIcon />
								Sign in
							</Link>
						</li>
					) : (
						loggedRouter()
					)}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
