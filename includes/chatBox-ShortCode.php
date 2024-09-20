<?php
// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Shortcode to display the chat boxes
function chat_boxes_shortcode() {
    ob_start();
    ?>
<div class="chat-slider-custom">
    <div class="chat-slider-custom--box">
        <div class="line"></div>
        <h2 class="heading">CMX Cross Chat</h2>
        <p class="description">Our Discord Cross-Server capability that unites over 780,000 users at any one moment allowing them to chat with like minded people- an incredable edition to our vitual community platform.</p>
        <button class="button">Learn More</button>
    </div>
    <div class="chat-slider-custom--box">
        <div class="line"></div>
        <h2 class="heading">CMX Help Desk</h2>
        <p class="description">Our Human AI collaboration managdment tool, allows our business to soedn less time on the mundane and more time doing what we do best- making one on one chat rooms that people love!</p>
        <button class="button">Learn More</button>
        <button class="button">Jump In</button>
    </div>
    <div class="chat-slider-custom--box">
        <div class="line"></div>
        <h2 class="heading">CMX Collaboration Hub</h2>
        <p class="description">Meet business owners and start-up entrepreneurs in the CMX Collaboration Hub. Chat all things business, find leads, make mutually beneficial connections and lift others up.</p>
        <button class="button">Learn More</button>
    </div>
</div>

    <?php
    return ob_get_clean();
}
add_shortcode('chat_boxes', 'chat_boxes_shortcode');
