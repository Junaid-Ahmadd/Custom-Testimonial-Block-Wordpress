<?php
/**
 * Render callback for 'my-block'.
 *
 * @param array $attributes The block's attributes.
 * @return string Returns the post content filtered with do_blocks(), which parses dynamic blocks.
 */

    // Extract attribute values
    $testimonialQuote = esc_html($attributes['testimonialQuote']);
    $authorName = esc_html($attributes['authorName']);
    $jobTitle = esc_html($attributes['jobTitle']);

	?>

<div <?php echo get_block_wrapper_attributes(); ?>>
<span class="testimonial-text"><?php echo esc_html($testimonialQuote); ?></span>
    <br>
    <span class="author-name"><?php echo esc_html($authorName); ?></span>
    <br>
    <span class="job-title"><?php echo esc_html($jobTitle); ?></span>
</div>
