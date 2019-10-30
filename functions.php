<?php

/**
enqueue child theme to Name: Manage Issue Based Magazine Theme
 */

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles', 'add_my_script' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}
function add_my_script() {
    wp_enqueue_script(
        'menu-redirect',
        get_stylesheet_directory_uri() . '/js/menu-redirect.js',
        array('jquery')
    );
}

