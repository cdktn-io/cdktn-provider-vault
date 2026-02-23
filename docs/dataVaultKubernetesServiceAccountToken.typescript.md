# `dataVaultKubernetesServiceAccountToken` Submodule <a name="`dataVaultKubernetesServiceAccountToken` Submodule" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKubernetesServiceAccountToken <a name="DataVaultKubernetesServiceAccountToken" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer"></a>

```typescript
import { dataVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

new dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken(scope: Construct, id: string, config: DataVaultKubernetesServiceAccountTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig">DataVaultKubernetesServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig">DataVaultKubernetesServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetClusterRoleBinding">resetClusterRoleBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterRoleBinding` <a name="resetClusterRoleBinding" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```typescript
public resetClusterRoleBinding(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultKubernetesServiceAccountToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct"></a>

```typescript
import { dataVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```typescript
import { dataVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource"></a>

```typescript
import { dataVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport"></a>

```typescript
import { dataVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultKubernetesServiceAccountToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultKubernetesServiceAccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultKubernetesServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultKubernetesServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">serviceAccountNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountToken">serviceAccountToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">clusterRoleBindingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBinding">clusterRoleBinding</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

##### `serviceAccountNamespace`<sup>Required</sup> <a name="serviceAccountNamespace" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```typescript
public readonly serviceAccountNamespace: string;
```

- *Type:* string

---

##### `serviceAccountToken`<sup>Required</sup> <a name="serviceAccountToken" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```typescript
public readonly serviceAccountToken: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `clusterRoleBindingInput`<sup>Optional</sup> <a name="clusterRoleBindingInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```typescript
public readonly clusterRoleBindingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```typescript
public readonly kubernetesNamespaceInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `clusterRoleBinding`<sup>Required</sup> <a name="clusterRoleBinding" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```typescript
public readonly clusterRoleBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKubernetesServiceAccountTokenConfig <a name="DataVaultKubernetesServiceAccountTokenConfig" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```typescript
import { dataVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

const dataVaultKubernetesServiceAccountTokenConfig: dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.backend">backend</a></code> | <code>string</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.role">role</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">clusterRoleBinding</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#backend DataVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#kubernetes_namespace DataVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#role DataVaultKubernetesServiceAccountToken#role}

---

##### `clusterRoleBinding`<sup>Optional</sup> <a name="clusterRoleBinding" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```typescript
public readonly clusterRoleBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#cluster_role_binding DataVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#namespace DataVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/kubernetes_service_account_token#ttl DataVaultKubernetesServiceAccountToken#ttl}

---



