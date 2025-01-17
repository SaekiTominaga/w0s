/** @type {import('@markuplint/ml-config').Config} */
export default {
	rules: {
		'attr-duplication': true,
		'deprecated-attr': true,
		'deprecated-element': true,
		'disallowed-element': ['noscript', 'embed'],
		doctype: true,
		'heading-levels': true,
		'id-duplication': true,
		'invalid-attr': {
			options: {
				allowAttrs: [
					{
						name: 'tabindex',
						value: {
							enum: ['-1', '0'],
						},
					},
				],
				disallowAttrs: ['accesskey'],
			},
		},
		'no-duplicate-dt': true,
		'no-empty-palpable-content': true,
		'no-orphaned-end-tag': true,
		'permitted-contents': true,
		'placeholder-label-option': true,
		'require-datetime': true,
		'required-attr': true,
		'required-element': false,
		'label-has-control': true,
		'landmark-roles': true,
		'neighbor-popovers': true,
		'no-ambiguous-navigable-target-names': true,
		'no-consecutive-br': true,
		'no-refer-to-non-existent-id': true,
		'require-accessible-name': true,
		'required-h1': true,
		'table-row-column-alignment': false,
		'use-list': false,
		'wai-aria': true,
		'class-naming': false,
		'no-hard-code-id': false,
		'no-use-event-handler-attr': true,
		'attr-value-quotes': false,
		'case-sensitive-attr-name': 'lower',
		'case-sensitive-tag-name': 'lower',
		'character-reference': true,
		'end-tag': true,
		'ineffective-attr': true,
		'no-boolean-attr-value': false,
		'no-default-value': true,
	},
	nodeRules: [
		{
			selector: 'html',
			rules: {
				'invalid-attr': {
					options: {
						ignoreAttrNamePrefix: ['prefix'],
					},
				},
				'required-attr': ['lang'],
			},
		},
		{
			selector: 'meta[property]',
			rules: {
				'invalid-attr': {
					options: {
						allowAttrs: [
							{
								name: 'property',
								value: {
									pattern: '/^og:.+/',
								},
							},
							{
								name: 'content',
								value: {
									type: 'NoEmptyAny',
								},
							},
						],
					},
				},
				'required-attr': false,
			},
		},
		{
			selector: 'search',
			rules: {
				'required-attr': ['role'],
				'wai-aria': {
					options: {
						disallowSetImplicitRole: false,
					},
				},
			},
		},
		{
			selector: 'div',
			rules: {
				'required-attr': ['class'],
			},
		},
		{
			selector: 'dl > div, object > div',
			rules: {
				'required-attr': false,
			},
		},
		{
			selector: 'img',
			rules: {
				'required-attr': ['alt'],
			},
		},
		{
			selector: 'iframe',
			rules: {
				'required-attr': ['title'],
			},
		},
		{
			selector: 'object',
			rules: {
				'required-attr': ['data', 'type', 'role', 'aria-labelledby'],
			},
		},
		{
			selector: 'figcaption ~ table, table:has(~ figcaption)',
			rules: {
				'disallowed-element': ['caption'],
				'require-accessible-name': false,
			},
		},
		{
			selector: 'thead th',
			rules: {
				'required-attr': [
					{
						name: 'scope',
						value: ['col', 'colgroup'],
					},
				],
			},
		},
		{
			selector: 'tbody th',
			rules: {
				'required-attr': [
					{
						name: 'scope',
						value: ['row', 'rowgroup'],
					},
				],
			},
		},
		{
			selector: 'td',
			rules: {
				'no-empty-palpable-content': false,
			},
		},
		{
			selector: 'input[pattern]',
			rules: {
				'required-attr': {
					value: [
						{
							name: 'title',
						},
					],
				},
			},
		},
		{
			regexSelector: {
				nodeName: 'details',
				attrName: 'name',
				attrValue: '^(?<value>.+)$',
				combination: {
					combinator: ' ',
					nodeName: 'details',
				},
			},
			rules: {
				'invalid-attr': {
					options: {
						disallowAttrs: {
							name: {
								pattern: '{{ value }}',
							},
						},
					},
					reason: 'A document must not contain a details element that is a descendant of another details element in the same details name group.',
				},
			},
		},
		{
			/* https://github.com/markuplint/markuplint/issues/1948 */
			selector: 'template *',
			rules: {
				'no-empty-palpable-content': false,
				'require-accessible-name': false,
			},
		},
		{
			/* https://github.com/markuplint/markuplint/issues/1948 */
			selector: ':has(> template)',
			rules: {
				'wai-aria': false,
			},
		},
		{
			/* https://github.com/markuplint/markuplint/issues/673 */
			selector: '[role=radiogroup]',
			rules: {
				'wai-aria': false,
			},
		},
	],
};
