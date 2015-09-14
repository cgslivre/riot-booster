/**
 * bs-nav
 *
 * @param string type - {list | inline | tabs | pills | pills-stacked}
 */
<bs-nav>
    <nav if="{ opts.type === 'inline' }" class="{ classes }">
        <yield if="{ opts.items === null }" />
        <a each="{ opts.items }" class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || '#' }">{ this.title }</a>
    </nav>
    <ul name="list" if="{ opts.type !== 'inline' }" class="{ classes }">
        <yield if="{ opts.items === null }" />
        <li each="{ opts.items }" class="nav-item">
            <a class="{nav-link: true, active: this.active, disabled: this.disabled}" href="{ this.link || '#' }">{ this.title }</a>
        </li>
    </ul>

    <script>
        this.mixin('scope')

        var classes = [
            'nav',
            typeClass(opts.type || 'list'),
            opts.class || '',
        ]
        this.classes = classes.join(' ')

//        this.root.querySelector('a')

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
    </script>
</bs-nav>
