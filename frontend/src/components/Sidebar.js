import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './styles/sidebar.css'

function Sidebar(){
		const [mobile, setMobile] = useState(window.matchMedia("(max-width:1300px)").matches)

		useEffect(()=>{
				const handler = e => setMobile(e.matches)
				window.matchMedia("(max-width:1300px)").addListener(handler)
		},[])

		return(
				<div className="sidebar" style={{transform:mobile? "translateY(-100%)" : "translateY(0%)"}}>
				<div className="sidebar-container">
				<div className="slogo">
				<svg width="209" height="159" viewBox="0 0 209 159" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M92.6847 153.062C134.952 153.062 169.216 118.798 169.216 76.5309C169.216 34.264 134.952 0 92.6847 0C50.4178 0 16.1538 34.264 16.1538 76.5309C16.1538 118.798 50.4178 153.062 92.6847 153.062Z" fill="#FF3939"/>
				<path d="M14.2311 115.47C22.0908 115.47 28.4623 109.098 28.4623 101.239C28.4623 93.3792 22.0908 87.0077 14.2311 87.0077C6.37151 87.0077 0 93.3792 0 101.239C0 109.098 6.37151 115.47 14.2311 115.47Z" fill="white"/>
				<path d="M127.204 25.3236C127.204 25.3236 130.264 25.9642 130.976 29.2388C131.688 32.5129 135.532 33.8891 136.623 34.5533C137.714 35.2175 144.547 39.3461 147.585 44.8983C150.622 50.4505 162.58 54.6738 162.58 54.6738C162.58 54.6738 164.099 55.1008 164.336 58.0431C164.336 58.0431 173.4 63.6426 175.156 65.5405C176.911 67.4389 185.263 74.7465 187.256 75.4106C189.249 76.0748 189.296 76.6917 196.462 77.309C203.627 77.9259 208.135 82.4816 208.088 83.9524C208.088 83.9524 208.657 84.5693 207.803 84.9016C207.803 84.9016 208.657 85.6137 207.661 85.8982C207.661 85.8982 208.657 88.2236 204.577 86.4677C204.577 86.4677 205.668 88.4134 198.93 85.7083C198.93 85.7083 194.659 84.1423 192.619 84.1423C190.578 84.1423 186.687 82.7187 186.07 81.2479C185.453 79.777 177.528 76.2179 175.63 76.1705C173.732 76.1232 157.883 68.0563 157.314 66.5376C157.314 66.5376 153.897 66.2531 153.423 64.687C152.948 63.1209 147.443 60.084 146.827 59.7995C146.21 59.515 138.237 51.7326 138.237 51.7326C138.237 51.7326 132.116 53.2277 129.696 60.0609C129.696 60.0609 129.625 60.7014 129.269 61.5554C128.913 62.4094 128.664 62.8009 128.308 63.0145C127.952 63.228 128.023 63.833 127.489 64.0465C127.489 64.0465 123.29 70.8797 122.328 73.5848C121.367 76.2894 121.083 79.7065 121.047 80.347C121.012 80.9876 121.225 82.5891 120.549 82.8741C119.873 83.1586 118.698 83.0167 118.698 83.0167C118.698 83.0167 117.595 101.417 89.8349 107.68C89.8349 107.68 89.4789 108.464 88.3403 107.68C88.3403 107.68 88.1268 106.826 87.1303 106.755C86.1338 106.684 81.2227 106.114 79.5851 108.891C77.948 111.667 69.7623 121.276 66.5946 122.557C66.5946 122.557 66.2978 126.614 70.3791 132.309C70.3791 132.309 76.987 135.334 77.236 136.152C77.485 136.971 78.019 144.73 70.1892 147.648C70.1892 147.648 67.973 148.288 66.5898 151.242C65.2066 154.197 60.6036 160.638 57.0445 158.598C53.4854 156.557 57.8512 153.141 57.8512 153.141C57.8512 153.141 60.8408 150.673 61.2205 146.26C61.2205 146.26 59.8916 143.698 60.7935 140.471C60.7935 140.471 61.2678 140.803 61.7426 140.851C61.7426 140.851 62.3122 132.878 56.6653 129.035C56.6653 129.035 49.0727 132.167 45.5136 134.919C45.5136 134.919 43.3544 135.618 43.2124 135.583C43.0699 135.547 42.1094 137.611 42.1094 137.896C42.1094 138.182 40.0093 138.145 40.0093 138.145C40.0093 138.145 35.2046 144.018 34.1016 143.413C34.1016 143.413 31.397 144.694 29.973 143.982C28.5494 143.27 23.7802 140.85 29.4749 135.583C29.4749 135.583 31.3255 135.203 30.6613 128.37C30.6613 128.37 31.0884 118.594 36.7831 118.452C36.7831 118.452 40.105 118.215 40.532 125.665C40.532 125.665 42.2879 123.59 43.5335 125.938L50.7937 119.389C50.7937 119.389 47.4599 116.744 49.0733 112.283C50.6867 107.823 54.8626 101.891 54.8626 101.891C54.8626 101.891 53.8661 100.372 54.91 98.9967C54.91 98.9967 55.8118 98.1427 56.6659 97.6205C57.5199 97.0983 61.3162 93.16 61.6485 93.0175C61.6485 93.0175 62.1707 92.4006 62.5262 92.3533C62.5262 92.3533 62.7397 91.7128 63.2856 91.5703C63.2856 91.5703 63.618 91.0717 64.3058 90.9061C64.3058 90.9061 68.9324 87.6557 69.2648 87.0625C69.5971 86.4693 73.6069 81.7717 74.817 80.6563C76.027 79.5409 82.9312 73.4434 84.2364 73.1825C84.2364 73.1825 82.4333 72.3758 81.9353 70.7388C81.4367 69.1018 84.4978 67.8917 85.6363 66.2547C86.7754 64.6176 94.3201 56.8589 96.2422 53.8693C98.1642 50.8797 95.5307 45.1855 95.2457 44.0464C94.9606 42.9074 89.4563 40.9622 88.7921 41.5312C88.128 42.1007 87.7483 41.6737 87.7483 41.6737C87.7483 41.6737 85.3755 42.006 84.5688 42.4804C83.7621 42.9547 77.4511 42.3379 77.4511 42.3379C77.4511 42.3379 75.5532 42.0534 71.0449 44.0459C66.5371 46.039 49.5487 41.5548 49.5487 41.5548C49.5487 41.5548 44.2815 40.1313 37.1633 42.5514C37.1633 42.5514 28.8635 42.2905 26.7494 40.9616C24.6353 39.6328 26.3913 39.1584 26.3913 39.1584C26.3913 39.1584 27.0554 39.0159 28.4316 39.4429C29.8078 39.8699 29.5707 38.3991 28.6215 37.6397C27.6723 36.8803 25.2522 37.687 25.1097 37.687C24.9671 37.687 21.0762 37.7343 22.8794 36.7857C24.6827 35.8365 27.8621 33.9859 29.8079 34.1757C31.7536 34.3656 34.933 33.8913 39.2037 35.6466C43.4743 37.4025 48.6468 35.8365 48.6468 35.8365C48.6468 35.8365 64.9232 33.1555 67.7703 33.9386C70.6174 34.7216 76.454 33.2265 76.454 33.2265C76.454 33.2265 80.8672 31.091 81.5792 31.091C81.5792 31.091 81.5082 29.8454 82.0417 29.5964C82.5758 29.3474 92.683 25.4441 97.1435 26.773C97.1435 26.773 100.276 25.1596 102.743 26.0136C102.743 26.0136 105.021 26.488 104.594 24.7326C104.167 22.9767 102.933 22.455 103.834 21.0788C103.834 21.0788 103.265 16.571 103.929 14.4355C103.929 14.4355 101.272 14.2929 100.038 12.6322C100.038 12.6322 106.16 10.7343 106.919 9.26294C107.678 7.79207 116.599 2.90406 123.718 9.26294C123.718 9.26294 124.857 10.9715 125.853 11.0188C125.853 11.0188 125.711 11.3033 125.094 11.3985C125.094 11.3985 125.426 12.5376 126.28 12.6796C126.28 12.6796 125.711 13.4862 125.521 13.4862C125.521 13.4862 128.748 20.3195 125.141 25.0176C125.141 25.0176 124.951 26.3939 125.615 26.9634C125.615 26.9634 126.849 26.489 126.802 26.0615C126.752 25.6318 127.204 25.3236 127.204 25.3236Z" fill="white"/>
				</svg>
				</div>
				<ul>
				        <li>
								<Link to="/">HOME</Link>
						</li>
				        <li>
								<Link to="/stats">PLAYER STATS</Link>
						</li>
				        <li>
								<Link to="/fantasy">FANTASY TEAM</Link>
						</li>
				        <li>
								<Link to="/about">ABOUT</Link>
						</li>
				</ul>

				</div>

		</div>
		)

}

export default Sidebar;