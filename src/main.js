import './style.css'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize the application
class WholesaleHub {
  constructor() {
    this.init()
  }

  init() {
    this.setupLoading()
    this.setupNavigation()
    this.setupHero3D()
    this.setupAbout3D()
    this.setupProducts()
    this.setupAnimations()
    this.setupCounters()
    this.setupContactForm()
  }

  setupLoading() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen')
        loadingScreen.classList.add('hidden')
        
        setTimeout(() => {
          loadingScreen.style.display = 'none'
        }, 500)
      }, 2000)
    })
  }

  setupNavigation() {
    const navbar = document.querySelector('.navbar')
    const navToggle = document.getElementById('nav-toggle')
    const navMenu = document.getElementById('nav-menu')
    const navLinks = document.querySelectorAll('.nav-link')

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    })

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active')
      })
    })

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetSection = document.querySelector(targetId)
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      })
    })
  }

  setupHero3D() {
    const canvas = document.getElementById('hero-canvas')
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.5, 32),
      new THREE.TorusGeometry(0.7, 0.3, 16, 100)
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x667eea, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0x764ba2, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0xf093fb, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0x4facfe, transparent: true, opacity: 0.8 })
    ]

    const meshes = []
    
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = materials[Math.floor(Math.random() * materials.length)]
      const mesh = new THREE.Mesh(geometry, material)
      
      mesh.position.x = (Math.random() - 0.5) * 20
      mesh.position.y = (Math.random() - 0.5) * 20
      mesh.position.z = (Math.random() - 0.5) * 20
      
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      
      scene.add(mesh)
      meshes.push(mesh)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    camera.position.z = 15

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001
        mesh.rotation.y += 0.005 + index * 0.001
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }

  setupAbout3D() {
    const canvas = document.getElementById('about-canvas')
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create interconnected network visualization
    const nodes = []
    const connections = []

    // Create nodes
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 16, 16)
      const material = new THREE.MeshPhongMaterial({ 
        color: 0x2563eb,
        transparent: true,
        opacity: 0.8
      })
      const node = new THREE.Mesh(geometry, material)
      
      node.position.x = (Math.random() - 0.5) * 8
      node.position.y = (Math.random() - 0.5) * 6
      node.position.z = (Math.random() - 0.5) * 4
      
      scene.add(node)
      nodes.push(node)
    }

    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x667eea,
      transparent: true,
      opacity: 0.3
    })

    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j && Math.random() > 0.7) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            node.position,
            otherNode.position
          ])
          const line = new THREE.Line(geometry, lineMaterial)
          scene.add(line)
          connections.push(line)
        }
      })
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    camera.position.z = 8

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      nodes.forEach((node, index) => {
        node.rotation.x += 0.01
        node.rotation.y += 0.01
        node.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    })

    resizeObserver.observe(canvas)
  }

  setupProducts() {
    const productsData = [
      {
        id: 1,
        title: "Premium Wireless Headphones",
        description: "High-quality audio with noise cancellation",
        price: "$45.99",
        category: "electronics",
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 2,
        title: "Smart Home Security Camera",
        description: "1080p HD with night vision and motion detection",
        price: "$89.99",
        category: "electronics",
        image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 3,
        title: "Ergonomic Office Chair",
        description: "Comfortable seating for long work hours",
        price: "$199.99",
        category: "home",
        image: "https://images.pexels.com/photos/586344/pexels-photo-586344.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 4,
        title: "Designer Sunglasses",
        description: "UV protection with stylish frames",
        price: "$29.99",
        category: "fashion",
        image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 5,
        title: "Fitness Tracker Watch",
        description: "Monitor your health and fitness goals",
        price: "$79.99",
        category: "sports",
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 6,
        title: "Portable Bluetooth Speaker",
        description: "Waterproof with 12-hour battery life",
        price: "$39.99",
        category: "electronics",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 7,
        title: "LED Desk Lamp",
        description: "Adjustable brightness with USB charging",
        price: "$34.99",
        category: "home",
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 8,
        title: "Premium Backpack",
        description: "Durable and spacious for daily use",
        price: "$59.99",
        category: "fashion",
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]

    const productsGrid = document.getElementById('products-grid')
    const categoryBtns = document.querySelectorAll('.category-btn')

    const renderProducts = (products) => {
      productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
          </div>
          <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
              <div>
                <div class="price">${product.price}</div>
                <div class="price-label">Min. order: 50 units</div>
              </div>
            </div>
          </div>
        </div>
      `).join('')

      // Animate product cards
      gsap.fromTo('.product-card', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out"
        }
      )
    }

    const filterProducts = (category) => {
      if (category === 'all') {
        renderProducts(productsData)
      } else {
        const filtered = productsData.filter(product => product.category === category)
        renderProducts(filtered)
      }
    }

    // Category filter functionality
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        
        const category = btn.dataset.category
        filterProducts(category)
      })
    })

    // Initial render
    renderProducts(productsData)
  }

  setupAnimations() {
    // Animate sections on scroll
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animate service cards
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Parallax effect for hero section
    gsap.to('.hero-3d-container', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }

  setupCounters() {
    const counters = document.querySelectorAll('.stat-number')
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.dataset.target)
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        counter.textContent = Math.floor(current).toLocaleString()
      }, 16)
    }

    // Trigger counters when hero section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => animateCounter(counter))
          observer.unobserve(entry.target)
        }
      })
    })

    const heroSection = document.querySelector('.hero')
    if (heroSection) {
      observer.observe(heroSection)
    }
  }

  setupContactForm() {
    const form = document.querySelector('.contact-form')
    
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      
      submitBtn.textContent = 'Sending...'
      submitBtn.disabled = true
      
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!'
        submitBtn.style.background = '#10b981'
        
        setTimeout(() => {
          submitBtn.textContent = originalText
          submitBtn.disabled = false
          submitBtn.style.background = ''
          form.reset()
        }, 2000)
      }, 1500)
    })
  }
}

// Initialize the application
new WholesaleHub()