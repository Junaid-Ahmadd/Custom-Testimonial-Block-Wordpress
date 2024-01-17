/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { testimonialQuote, authorName, jobTitle } = attributes;
	return (
		<>
            <InspectorControls>
			<PanelBody title={ __( 'Settings', 'testimonial-card' ) }>
			<TextControl
          label={__("Testimonial Quote", "testimonial-card")}
          value={testimonialQuote || ""}
          onChange={(value) => setAttributes({ testimonialQuote: value })}
        />
        <TextControl
          label={__("Author Name", "testimonial-card")}
          value={authorName || ""}
          onChange={(value) => setAttributes({ authorName: value })}
        />
        <TextControl
          label={__("Job Title", "testimonial-card")}
          value={jobTitle || ""}
          onChange={(value) => setAttributes({ jobTitle: value })}
        />
                </PanelBody>
            </InspectorControls>

		<p { ...useBlockProps() }>
			
				<p>{testimonialQuote}</p>
				<p>{authorName}</p>
				<p>{jobTitle}</p>
			
		</p>
		</>
	);
}
