# `ephemeralVaultApproleAuthBackendRoleSecretId` Submodule <a name="`ephemeralVaultApproleAuthBackendRoleSecretId` Submodule" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretId <a name="EphemeralVaultApproleAuthBackendRoleSecretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer"></a>

```typescript
import { ephemeralVaultApproleAuthBackendRoleSecretId } from '@cdktn/provider-vault'

new ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId(scope: Construct, id: string, config: EphemeralVaultApproleAuthBackendRoleSecretIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig">EphemeralVaultApproleAuthBackendRoleSecretIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig">EphemeralVaultApproleAuthBackendRoleSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList">resetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetCidrList` <a name="resetCidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList"></a>

```typescript
public resetCidrList(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses"></a>

```typescript
public resetNumUses(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct"></a>

```typescript
import { ephemeralVaultApproleAuthBackendRoleSecretId } from '@cdktn/provider-vault'

ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```typescript
import { ephemeralVaultApproleAuthBackendRoleSecretId } from '@cdktn/provider-vault'

ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultApproleAuthBackendRoleSecretId } from '@cdktn/provider-vault'

ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput">cidrListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput">numUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList">cidrList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses">numUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```typescript
public readonly cidrListInput: string[];
```

- *Type:* string[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput"></a>

```typescript
public readonly numUsesInput: number;
```

- *Type:* number

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList"></a>

```typescript
public readonly cidrList: string[];
```

- *Type:* string[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses"></a>

```typescript
public readonly numUses: number;
```

- *Type:* number

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretIdConfig <a name="EphemeralVaultApproleAuthBackendRoleSecretIdConfig" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```typescript
import { ephemeralVaultApproleAuthBackendRoleSecretId } from '@cdktn/provider-vault'

const ephemeralVaultApproleAuthBackendRoleSecretIdConfig: ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList">cidrList</a></code> | <code>string[]</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata">metadata</a></code> | <code>string</code> | JSON-encoded secret data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses">numUses</a></code> | <code>number</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl">ttl</a></code> | <code>number</code> | The TTL duration of the SecretID in seconds. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#role_name EphemeralVaultApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#backend EphemeralVaultApproleAuthBackendRoleSecretId#backend}

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```typescript
public readonly cidrList: string[];
```

- *Type:* string[]

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#cidr_list EphemeralVaultApproleAuthBackendRoleSecretId#cidr_list}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

JSON-encoded secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#metadata EphemeralVaultApproleAuthBackendRoleSecretId#metadata}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#mount_id EphemeralVaultApproleAuthBackendRoleSecretId#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#namespace EphemeralVaultApproleAuthBackendRoleSecretId#namespace}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses"></a>

```typescript
public readonly numUses: number;
```

- *Type:* number

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#num_uses EphemeralVaultApproleAuthBackendRoleSecretId#num_uses}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL duration of the SecretID in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#ttl EphemeralVaultApproleAuthBackendRoleSecretId#ttl}

---



