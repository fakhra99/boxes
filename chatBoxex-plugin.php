<?php
/*
Plugin Name: Custom Boxes Plugin
Description: A simple plugin to display custom chat boxes.
Version: 1.0
Author: Fakhrah Najeeb
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue styles
function custom_boxes_enqueue_styles() {
    wp_enqueue_style('custom-boxes-style', plugin_dir_url(__FILE__) . 'css/style.css');

    // Enqueue JavaScript
    wp_enqueue_script('chat-boxes-js', plugins_url('js/script.js', __FILE__), array('jquery'), null, true);

}
add_action('wp_enqueue_scripts', 'custom_boxes_enqueue_styles');

// Include the shortcode file
require_once plugin_dir_path(__FILE__) . 'includes/chatBox-ShortCode.php';
