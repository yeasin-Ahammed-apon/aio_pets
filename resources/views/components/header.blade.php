<header class="petz-header flw">
    <div class="theme-header-box flw">
        <div class="container">
            <nav class="theme-box-menu">
                <ul id="menu-left-menu" class="primary-menu primary-left">
                    <li id="menu-item-8455"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-8455 {{ Request::is('/') ? 'current-menu-item' : '' }}">
                        <a href="{{ url('/') }}">Home</a>
                        <ul class="sub-menu">
                            <li id="menu-item-2688"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2688 {{ Request::is('/') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/') }}">Home Default</a>
                            </li>
                            <li id="menu-item-8451"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8451 {{ Request::is('home-2') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/home-2') }}">Home Layer Slider</a>
                            </li>
                            <li id="menu-item-8450"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8450 {{ Request::is('home-parallax') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/home-parallax') }}">Home Parallax</a>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-2677"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2677 {{ Request::is('about') ? 'current-menu-item' : '' }}">
                        <a href="{{ url('/about') }}">About</a>
                    </li>
                    <li id="menu-item-2155"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2155">
                        <a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li id="menu-item-2679"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2679 {{ Request::is('gallery') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/gallery') }}">Gallery</a>
                            </li>
                            <li id="menu-item-2678"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2678 {{ Request::is('adoption') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/adoption') }}">Adoption</a>
                            </li>
                            <li id="menu-item-2680"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2680 {{ Request::is('our-services') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/our-services') }}">Our Services</a>
                            </li>
                            <li id="menu-item-2684"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2684 {{ Request::is('services-pet-hotel') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/services-pet-hotel') }}">Service single</a>
                            </li>
                            <li id="menu-item-2681"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2681 {{ Request::is('our-team') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/our-team') }}">Our Team</a>
                            </li>
                            <li id="menu-item-2683"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2683 {{ Request::is('testi') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/testi') }}">Testimonials</a>
                            </li>
                            <li id="menu-item-2682"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2682 {{ Request::is('pricing-table') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/pricing-table') }}">Pricing table</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div itemscope itemtype="http://schema.org/Organization" class="ht-logo">
                    <a class="lg" href="{{ url('/') }}" itemprop="url">
                        <img src="../wp-content/themes/petz/images/logo.png" alt="" itemprop="logo"
                            width="180" height="67" />
                    </a>
                    <span class="screen-reader-text">Petz</span>
                </div>
                <ul id="menu-right-menu" class="primary-menu primary-right">
                    <li id="menu-item-2369"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2369 {{ Request::is('shop') ? 'current-menu-item' : '' }}">
                        <a href="{{ url('/shop') }}">Shop</a>
                    </li>
                    <li id="menu-item-2162"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2162 {{ Request::is('blog') ? 'current-menu-item' : '' }}">
                        <a href="#">Blog</a>
                        <ul class="sub-menu">
                            <li id="menu-item-1760"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1760 {{ Request::is('blog') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/blog') }}">Blog standard</a>
                            </li>
                            <li id="menu-item-2305"
                                class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2305 {{ Request::is('taking-care-of-a-puppy') ? 'current-menu-item' : '' }}">
                                <a href="{{ url('/taking-care-of-a-puppy') }}">Blog single</a>
                            </li>
                        </ul>
                    </li>
                    <li id="menu-item-2685"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2685 {{ Request::is('contact') ? 'current-menu-item' : '' }}">
                        <a href="{{ url('/contact') }}">Contact</a>
                    </li>
                </ul>
                <span id="btn-toggle" class="ion-android-menu"></span>
            </nav>
        </div>
    </div>
    <div class="ht-overlay"></div>
</header>
