# `ephemeralVaultKubernetesServiceAccountToken` Submodule <a name="`ephemeralVaultKubernetesServiceAccountToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKubernetesServiceAccountToken <a name="EphemeralVaultKubernetesServiceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer"></a>

```typescript
import { ephemeralVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

new ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken(scope: Construct, id: string, config: EphemeralVaultKubernetesServiceAccountTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig">EphemeralVaultKubernetesServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig">EphemeralVaultKubernetesServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding">resetClusterRoleBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClusterRoleBinding` <a name="resetClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```typescript
public resetClusterRoleBinding(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct"></a>

```typescript
import { ephemeralVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```typescript
import { ephemeralVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">serviceAccountNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken">serviceAccountToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">clusterRoleBindingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding">clusterRoleBinding</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

##### `serviceAccountNamespace`<sup>Required</sup> <a name="serviceAccountNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```typescript
public readonly serviceAccountNamespace: string;
```

- *Type:* string

---

##### `serviceAccountToken`<sup>Required</sup> <a name="serviceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```typescript
public readonly serviceAccountToken: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `clusterRoleBindingInput`<sup>Optional</sup> <a name="clusterRoleBindingInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```typescript
public readonly clusterRoleBindingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```typescript
public readonly kubernetesNamespaceInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `clusterRoleBinding`<sup>Required</sup> <a name="clusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```typescript
public readonly clusterRoleBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKubernetesServiceAccountTokenConfig <a name="EphemeralVaultKubernetesServiceAccountTokenConfig" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```typescript
import { ephemeralVaultKubernetesServiceAccountToken } from '@cdktn/provider-vault'

const ephemeralVaultKubernetesServiceAccountTokenConfig: ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend">backend</a></code> | <code>string</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role">role</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">clusterRoleBinding</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#backend EphemeralVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#kubernetes_namespace EphemeralVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#role EphemeralVaultKubernetesServiceAccountToken#role}

---

##### `clusterRoleBinding`<sup>Optional</sup> <a name="clusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```typescript
public readonly clusterRoleBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#cluster_role_binding EphemeralVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#mount_id EphemeralVaultKubernetesServiceAccountToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#namespace EphemeralVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#ttl EphemeralVaultKubernetesServiceAccountToken#ttl}

---



