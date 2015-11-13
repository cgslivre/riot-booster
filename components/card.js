/**
 * bs-card
 *
 * @param bool inverse - [Optional]
 * @param string img-src - [Optional]
 * @param string img-alt - [Optional]
 * @param string img-position - [Optional:top] {top | bottom}
 */
riot.tag2('bs-card', '<img if="{opts[\'img-src\'] && imagePosition() == \'top\'}" class="card-img-top" data-src="{opts[\'img-src\']}" alt="{opts[\'img-alt\']}"> <yield></yield> <img if="{opts[\'img-src\'] && imagePosition() == \'bottom\'}" class="card-img-bottom" data-src="{opts[\'img-src\']}" alt="{opts[\'img-alt\']}">', 'bs-card,[riot-tag="bs-card"] { display: block; }', 'class="{classes}"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card',
            opts.inverse ? 'card-inverse' : '',
            opts.class || '',
        ]
        this.classes = classes.join(' ')

        this.imagePosition = function() {
            return opts['img-position'] || 'top'
        }.bind(this)
}, '{ }');

/**
 * bs-card-header
 *
 */
riot.tag2('bs-card-header', '<yield></yield>', 'bs-card-header,[riot-tag="bs-card-header"] { display: block; }', 'class="{this.classes}"', function(opts) {
        this.mixin('scope')

        var classes = [
            'card-header',
            opts.class || '',
        ]
        this.classes = classes.join(' ')
}, '{ }');

/**
 * bs-card-block
 *
 */
riot.tag2('bs-card-block', '<yield></yield>', 'bs-card-block,[riot-tag="bs-card-block"] { display: block; }', 'class="card-block"', function(opts) {
        this.mixin('scope')
});

/**
 * bs-card-footer
 *
 */
riot.tag2('bs-card-footer', '<yield></yield>', 'bs-card-footer,[riot-tag="bs-card-footer"] { display: block; }', 'class="card-footer"', function(opts) {
        this.mixin('scope')
});

/**
 * bs-card-group
 *
 */
riot.tag2('bs-card-group', '<yield></yield>', 'bs-card-group,[riot-tag="bs-card-group"] { display: block; }', 'class="card-group"', function(opts) {
        this.mixin('scope')
});

/**
 * bs-card-deck
 *
 */
riot.tag2('bs-card-deck', '<yield></yield>', 'bs-card-deck,[riot-tag="bs-card-deck"] { display: block; }', 'class="card-deck"', function(opts) {
        this.mixin('scope')
});

/**
 * bs-card-columns
 *
 */
riot.tag2('bs-card-columns', '<yield></yield>', 'bs-card-columns,[riot-tag="bs-card-columns"] { display: block; }', 'class="card-columns"', function(opts) {
        this.mixin('scope')
});
