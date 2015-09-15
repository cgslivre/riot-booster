/**
 * bs-alert
 *
 * @param string type - [Required] {success | info | warning | danger}
 * @param bool closebox - [Optional]
 * @param function onclose
 */
riot.tag('bs-alert', '<yield></yield> <bs-alert-closebox if="{ opts.closebox || false }"></bs-alert-closebox>', 'bs-alert, [riot-tag="bs-alert"]{ display: block; }', 'role="alert" class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'alert',
            'alert-' + opts.type,
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.show = function() {

        }.bind(this);

        this.close = function() {
        }.bind(this);

        if (opts.onclose) {
            this.on('mount', function () {
                this.root.attachEventListener(function () {
                    opts.onclose()
                })
            })

            this.on('unmount', function () {
            })
        }
    
});

riot.tag('bs-alert-closebox', '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button>', function(opts) {

});

/**
 * bs-breadcrumb
 *
 * @param array items
 */
riot.tag('bs-breadcrumb', '<ol class="{ classes }"> <li each="{ opts.items }" class="{ active: this.active }"> <a if="{ !this.active }" href="{ this.link || \'#\' }">{ this.title }</a> { this.active ? this.title : \'\' } </li> </ol>', function(opts) {
        this.mixin('scope')

        var classes = [
            'breadcrumb',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
/**
 * bs-button
 *
 * @param string type - {default | primary | secondary | success | warning | danger | link}
 * @param string size - {large | medium | small}
 * @param string behavior - {button | submit | reset}
 * @param bool outline - default is false.
 * @param bool active - default is false.
 * @param function onpush
 */
riot.tag('bs-button', '<yield></yield>', 'class="{ classes }" __disabled="{ opts.disabled }" onclick="{ opts.onpush }" role="button"', function(opts) {
        this.mixin('scope')

        var classes = [
            'btn',
            (opts.type || 'secondary') !== 'default' ? typeClass(opts.type || 'secondary', opts.outline) : '',
            sizeClass(opts.size || 'medium'),
            opts.active ? 'active' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.root.type = opts.behavior || 'button'

        function typeClass(name, outline) {
            return 'btn-' + name + (outline ? '-outline' : '')
        }

        function sizeClass(name) {
            var sizes = {
                large: 'btn-lg',
                medium: '',
                small: 'btn-sm',

                lg: 'btn-lg',
                sm: 'btn-sm',
            }

            return sizes[name]
        }

        this.toggle = function() {
        }.bind(this);

        this.reset = function() {
        }.bind(this);
    
});

/**
 * bs-button-group
 *
 * @param string size - {large | medium | small | x-small}
 * @param string label
 * @param bool vertical - default is false.
 */
riot.tag('bs-button-group', '<yield></yield>', 'bs-button-group, [riot-tag="bs-button-group"]{ display: block; }', 'role="group" class="{ classes }" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = [
            opts.vertical ? 'btn-group-vertical' : 'btn-group',
            sizeClass(opts.size || 'medium'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function sizeClass(name) {
            var sizes = {
                large: 'btn-group-lg',
                medium: '',
                small: 'btn-group-sm',
                'x-small': 'btn-group-xs',

                lg: 'btn-group-lg',
                sm: 'btn-group-sm',
                xs: 'btn-group-xs',
            }

            return sizes[name]
        }
    
});

/**
 * bs-button-toolbar
 *
 * @param string label
 */
riot.tag('bs-button-toolbar', '<yield></yield>', 'bs-button-toolbar, [riot-tag="bs-button-toolbar"]{ display: block; }', 'role="toolbar" class="{ classes }" aria-label="{ opts.label }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'btn-toolbar',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card
 *
 * @param bool inverse - [Optional]
 * @param string img-src - [Optional]
 * @param string img-alt - [Optional]
 * @param string img-position - [Optional:top] {top | bottom}
 */
riot.tag('bs-card', '<img if="{ opts[\'img-src\'] && imagePosition == \'top\' }" class="card-img-top" data-src="{ opts[\'img-src\'] }" alt="{ opts[\'img-alt\'] }"> <yield></yield> <img if="{ opts[\'img-src\'] && imagePosition == \'bottom\' }" class="card-img-bottom" data-src="{ opts[\'img-src\'] }" alt="{ opts[\'img-alt\'] }">', 'bs-card, [riot-tag="bs-card"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.imagePosition = function() {
            return opts['img-position'] || 'top'
        }.bind(this);
    
});

/**
 * bs-card-header
 *
 */
riot.tag('bs-card-header', '<yield></yield>', 'bs-card-header, [riot-tag="bs-card-header"]{ display: block; }', 'class="{ this.classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card-header',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-card-block
 *
 */
riot.tag('bs-card-block', '<yield></yield>', 'bs-card-block, [riot-tag="bs-card-block"]{ display: block; }', 'class="card-block"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-footer
 *
 */
riot.tag('bs-card-footer', '<yield></yield>', 'bs-card-footer, [riot-tag="bs-card-footer"]{ display: block; }', 'class="card-footer"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-group
 *
 */
riot.tag('bs-card-group', '<yield></yield>', 'bs-card-group, [riot-tag="bs-card-group"]{ display: block; }', 'class="card-group"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-deck
 *
 */
riot.tag('bs-card-deck', '<yield></yield>', 'bs-card-deck, [riot-tag="bs-card-deck"]{ display: block; }', 'class="card-deck"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-card-columns
 *
 */
riot.tag('bs-card-columns', '<yield></yield>', 'bs-card-columns, [riot-tag="bs-card-columns"]{ display: block; }', 'class="card-columns"', function(opts) {
        this.mixin('scope')
    
});

riot.tag('bs-carousel', '', function(opts) {


});
/**
 * bs-dropdown
 *
 * @param string title [Optional:'Menu']
 * @param string button-type [Optional:'secondary']
 * @param array items [Required]
 */
riot.tag('bs-dropdown', '<button name="button" class="btn dropdown-toggle" type="button" data-toggle="dropdown"> { opts.title || \'Menu\' } </button> <bs-dropdown-menu items="{ opts.items }"> <yield></yield> </bs-dropdown-menu>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'dropdown',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.button.classList.add('btn-' + (opts['button-type'] || 'secondary'))
    
});

/**
 * bs-dropdown-menu
 *
 * @param array [Required] items -
 *              item.type:
 *              item.title: menu title
 *              item.disabled:
 *              item.link:
 *              item.target:
 *              item.onpush:
 */
riot.tag('bs-dropdown-menu', '<yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'dropdown-menu',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        for (var index in opts.items) {
            var item = opts.items[index]
            var type = item.type || 'link'

            if (type === 'link') {
                this.root.appendChild(newLinkItem(item))
            }
            else if (type === 'button') {
                this.root.appendChild(newButtonItem(item))
            }
            else if (type === 'separator') {
                this.root.appendChild(newSeparatorItem(item))
            }
            else {
                this.root.appendChild(newLinkItem(item))
            }
        }

        function newLinkItem(item) {
            var el = document.createElement('a')
            el.classList.add('dropdown-item')
            if (item.disabled) {
                el.classList.add('disabled')
            }
            el.setAttribute('href', item.link || '#')
            var target = item.target
            if (target) {
                if (target.match(/^!_/)) {
                    target = '_' + target
                }
                el.setAttribute('target', target)
            }
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }

        function newButtonItem(item) {
            var el = document.createElement('button')
            el.classList.add('dropdown-item')
            if (item.disabled) {
                el.classList.add('disabled')
            }
            if (item['button-type']) {
                el.classList.add('btn-' + item['button-type'])
            }
            el.setAttribute('type', item.button)
            el.addEventListener('click', opts.onpush)
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }

        function newSeparatorItem(item) {
            var el = document.createElement('div')
            el.classList.add('dropdown-divider')
            return el
        }

        function newTextItem(item) {
            var el = document.createElement('div')
            el.appendChild(document.createTextNode(item.title || '(No text)'))
            return el
        }
    
});

/**
 * bs-form
 */
riot.tag('bs-form', '<form name="form" class="{ classes }"> <yield></yield> </form>', function(opts) {
		this.mixin('scope')

		var classes = [
			opts.inline ? 'form-inline' : '',
		]
		this.classes = classes.join(' ')

		this.loadBindings = function() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

			for (var index in nodes) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					node.value = opts.bindings[node.name]
				}
			}
		}.bind(this);

		this.saveBindings = function() {
			if (!opts.bindings) return

			var nodes = this.form.querySelectorAll('[name]')

			for (var index in nodes) {
				var node = nodes[index];
				if (node.name in opts.bindings) {
					opts.bindings[node.name] = node.value
				}
			}
		}.bind(this);

		this.on('mount', function () {
			this.loadBindings()

			this.form.addEventListener('submit', function (e) {
				e.preventDefault()

				this.saveBindings()

				if (opts.onsubmit) {
					opts.onsubmit(e)
				}
			}.bind(this), true)
		})
	
});

/**
 * bs-input-static
 */
riot.tag('bs-input-static', '<p class="{ classes }">{ opts.value }</p>', function(opts) {
		var classes = [
			'form-control-static',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input
 */
riot.tag('bs-input', '<input type="{ opts.type }" class="{ classes }" name="{ opts.name }" value="{ opts.value }">', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-text
 */
riot.tag('bs-input-text', '<label for="{ opts.id }">{ opts.label }<yield></yield></label> <input type="{ opts.type || \'text\' }" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }"> </bs-input-text> /** * bs-input-textarea */ <bs-input-text> <label for="{ opts.id }">{ opts.label }<yield></yield></label> <textarea class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }" row="{ opts.row }" col="{ opts.col }">{ opts.value }</textarea>', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-file
 */
riot.tag('bs-input-file', '<input type="file" class="{ classes }" name="{ opts.name }" value="{ opts.value }">', function(opts) {
		var classes = [
			'form-control-file',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-checkbox
 */
riot.tag('bs-input-checkbox', '<label> <input type="checkbox" class="{ classes }" id="{ opts.id }" name="{ opts.name }" value="{ opts.value }" placeholder="{ opts.placeholder }"> { opts.label } <yield></yield> </label>', 'class="checkbox"', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-input-radio
 */
riot.tag('bs-input-radio', '<label> <input type="radio" class="{ classes }" name="{ opts.name }" value="{ opts.value }" __checked="{ opts.checked }"> { opts.label } <yield></yield> </label>', 'class="radio"', function(opts) {
		var classes = [
			'form-control',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-fieldset
 */
riot.tag('bs-fieldset', '<yield></yield>', 'class="{ classes }"', function(opts) {
		this.mixin('scope')

		var classes = [
			'form-group',
		]
		this.classes = classes.join(' ')
	
});

/**
 * bs-grid
 *
 * @param string type - {fixed | fluid}
 */
riot.tag('bs-grid', '<yield></yield>', 'bs-grid, [riot-tag="bs-grid"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            typeClass(opts.type || 'fixed'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name) {
            var types = {
                'fixed': 'container',
                'fluid': 'container-fluid'
            }
            return types[name]
        }
    
});

/**
 * bs-grid-row
 *
 */
riot.tag('bs-grid-row', '<yield></yield>', 'bs-grid-row, [riot-tag="bs-grid-row"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'row',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-grid-col
 *
 * @param string type - [Optional] {flow | push | pull}
 * @param string size -  [Required] {xl-* | lg-* | md-* | sm-* | xs-*}
 * @param string offset - [Optional] {xl-* | lg-* | md-* | sm-* | xs-*}
 */
riot.tag('bs-grid-col', '<yield></yield>', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            sizeClass(opts.type || 'flow', opts.size),
            opts.class || '',
        ]
        if (opts.offset)
            classes.push(offsetClass(opts.offset))
        this.classes = classes.join(' ')

        function sizeClass(type, name) {
            var types = {
                'flow': '-',
                'push': '-push-',
                'pull': '-pull-',
            }
            var p = name.split('-')
            return 'col-' + p[0] + types[type] + p[1]
        }

        function offsetClass(name) {
            var p = name.split('-')
            return 'col-' + p[0] + '-offset-' + p[1]
        }
    
});

/**
 * bs-jumbotron
 *
 * @param string type - {fixed | fluid}
 */
riot.tag('bs-jumbotron', '<yield></yield>', 'bs-jumbotron, [riot-tag="bs-jumbotron"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            typeClass(opts.type || 'fixed'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        function typeClass(name) {
            var types = {
                'fixed': 'jumbotron',
                'fluid': 'jumbotron jumbotron-fluid',
            }
            return types[name]
        }
    
});

/**
 * bs-label
 *
 * @param string type - {default | primary | success | info | warning | danger}
 * @param bool pill
 */
riot.tag('bs-label', '<yield></yield>', 'class="{ classes }"', function(opts) {
        var classes = [
            'label',
            'label-' + (opts.type || 'default'),
            opts.pill ? 'label-pill' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
/**
 * bs-list-group
 *
 * @param array items
 */
riot.tag('bs-list-group', '<ul if="{ opts.items }" class="{ classes }"> <li each="{ opts.items }" class="{ \'list-group\': true, active: this.active, disabled: this.disabled }"> <span if="{ this.label }" class="label label-{ this.\'label-type\' || \'default\' } label-pill pull-right">{ this.label }</span> { this.title } </li> </ul> <yield if="{ !opts.items }"></yield>', function(opts) {
        this.mixin('scope')

        var classes = [
            'list-group',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
/**
 * bs-media
 *
 */
riot.tag('bs-media', '<yield></yield>', 'class="media"', function(opts) {

});
/**
 * bs-modal
 *
 * @param string size - {large | medium | small}
 * @param bool fade - [Optional:false]
 * @param bool|string backdrop - [Optional:true] {true | false | static}
 * @param bool keyboard - [Optional:true]
 * @param bool show - [Optional:true]
 */
riot.tag('bs-modal', '<div name="dialog" class="modal-dialog" role="document"> <div class="modal-content"> <yield></yield> </div> </div>', 'bs-modal, [riot-tag="bs-modal"]{ display: block; }', 'class="{ classes }"', function(opts) {
        this.mixin('scope')

        var classes = [
            'modal',
            opts.fade ? 'fade' : '',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        if (opts.backdrop !== undefined)
            this.root.setAttribute('data-backdrop', opts.backdrop)
        if (opts.keyboard !== undefined)
            this.root.setAttribute('data-keyboard', opts.keyboard)
        if (opts.show !== undefined)
            this.root.setAttribute('data-show', opts.show)

        var size = sizeClass(opts.size || 'medium')
        if (size) this.dialog.classList.add(size)

        function sizeClass(name) {
            var sizes = {
                'large': 'modal-lg',
                'medium': '',
                'small': 'modal-sm',
            }
            return sizes[name]
        }

        this.show = function() {
            $(this.root).modal('show')
        }.bind(this);

        this.hide = function() {
            $(this.root).modal('hide')
        }.bind(this);

        this.toggle = function() {
            $(this.root).modal('toggle')
        }.bind(this);

        this.modal = function(options) {
            $(this.root).modal(options)
        }.bind(this);

        $(this.root).on('loaded.bs.modal', function () {
            this.trigger('loaded', this)
        }.bind(this))

        $(this.root).on('shown.bs.modal', function () {
            this.trigger('shown', this)
        }.bind(this))

        $(this.root).on('hidden.bs.modal', function () {
            this.trigger('hidden', this)
        }.bind(this))
    
});

/**
 * bs-modal-header
 *
 * @param bool closebox
 */
riot.tag('bs-modal-header', '<button if="{ opts.closebox }" type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button> <yield></yield>', 'bs-modal-header, [riot-tag="bs-modal-header"]{ display: block; }', 'class="modal-header"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-modal-body
 *
 */
riot.tag('bs-modal-body', '<yield></yield>', 'bs-modal-body, [riot-tag="bs-modal-body"]{ display: block; }', 'class="modal-body"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-modal-footer
 *
 */
riot.tag('bs-modal-footer', '<yield></yield>', 'bs-modal-footer, [riot-tag="bs-modal-footer"]{ display: block; }', 'class="modal-footer"', function(opts) {
        this.mixin('scope')
    
});

/**
 * bs-navbar
 *
 * @param string type - {dark | light}
 * @param string placement - {fixed-top | fixed-bottom}
 */
riot.tag('bs-navbar', '<nav if="{ !opts.collapse }" class="{ classes }"> <yield></yield> </nav> <nav if="{ opts.collapse }" class="{ classes }"> <button type="button" class="navbar-toggler hidden-sm-up" data-toggle="collapse"> &#9776; </button> <div class="collapse navbar-toggleable-xs"> <yield></yield> </div> </nav>', function(opts) {
        this.mixin('scope')

        var classes = [
            'navbar',
            opts.type ? 'navbar-' + opts.type : '',
            opts.placement ? 'navbar-' + opts.placement : '',
            opts.faded ? 'faded' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});

/**
 * bs-nav
 *
 * @param string type - {list | inline | tabs | pills | pills-stacked}
 * @param array items
 */
riot.tag('bs-nav', '<nav if="{ opts.type === \'inline\' && opts.items }" class="{ classes }"> <a each="{ opts.items }" class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || \'#\' }">{ this.title }</a> </nav> <nav if="{ opts.type === \'inline\' && !opts.items }" class="{ classes }"> <yield></yield> </nav> <ul if="{ opts.type !== \'inline\' && opts.items }" class="{ classes }"> <li each="{ opts.items }" class="nav-item"> <a class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || \'#\' }">{ this.title }</a> </li> </ul> <ul if="{ opts.type !== \'inline\' && !opts.items }" class="{ classes }"> <yield></yield> </ul>', 'bs-nav, [riot-tag="bs-nav"]{ display: block; }', function(opts) {
        this.mixin('scope')

        var classes = [
            'nav',
            typeClass(opts.type || 'list'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')


        function typeClass(name) {
            var types = {
                'list': '',
                'inline': '',
                'tabs': 'nav-tabs',
                'pills': 'nav-pills',
                'pills-stacked': 'nav-pills nav-stacked',
            }
            return types[name]
        }
    
});

riot.tag('bs-table', '<table class="{ classes }"> <yield></yield> </table>', function(opts) {
        this.mixin('scope')

        var classes = [
            'table',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
    
});
riot.tag('bs-tooltip', '', function(opts) {


});
riot.mixin('scope', {
    init: function () {
        if (this.parent)
            this.__proto__ = this.parent
    }
})
