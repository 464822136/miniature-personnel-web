import Router from '../../router'

export function loadRouter (menus, store) {
    var routes = []
      menus.forEach((menu) => {
          routes.push(loadMenu(menu));
      })
    store.commit('SET_ROUTES', routes)
    Router.addRoutes(routes)
}

export function loadMenu(menu) {
    let router = { path: '', component: '', children: []}
    router.title = menu.title
    router.path = '/' + menu.path
    router.component = loadView(menu.component);
    if (menu.children !== null) {
        var children = menu.children
        for (let i = 0; i < children.length; i++) {
            router.children.push(loadMenu(children[i]));
        }
    }
    return router
}

export function setChildren(router, child) {
    router.children.push(child)
}

export const loadView = (component) => { // 路由懒加载
    return () => import(`@/components/${component}`)
}
