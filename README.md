# pulumi_github_demo

Demo de pulumi con github con typescript.

```sh
pulumi version
```

```shell
v2.2.1
```

## Requerimientos

* Pulumi CLI ([pulumi](https://www.pulumi.com/docs/reference/cli/)).
* Cuenta de Github ([github](https://github.com/)).
* Organizacion de Github ([organization_github](https://github.com/organizations/plan)).
* Token de Github con permisos sobre organizaciones (admin:org, delete_repo, repo), se puede acceder desde Icono de user - settings - Developer settings - Personal Access Tokens).

Normalmente el proyecto se crea como sigue:

```sh
pulumi new -d "Mi proyecto Github" --dir pulumi_github_demo -n pulumi_github_demo -s develop -y typescript
```

Nota: No realizar, ya el repositorio tiene el contenido final

Se instalan las librerias faltantes.

```sh
cd github_example
npm install @pulumi/github mocha @types/mocha ts-node chai @types/chai
```

Se crean los archivos para el programa con la configuracion deseada.

Nota: No realizar, ya el repositorio tiene el contenido final

Crear el stack inicial.

```sh
pulumi stack init develop
```

Se ingresan las configuraciones necesarias para el programa.

```sh
pulumi config set --secret github:token TUTOKENDEGITHUB
pulumi config set github:organization TUORGDEGITHUB
pulumi config set github_example:suffix develop
```

Se realiza un preview del despliegue.

```sh
pulumi preview
```

Finalmente se realiza el despligue.

```sh
pulumi up --yes
```
