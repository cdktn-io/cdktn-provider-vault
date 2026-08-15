# `ephemeralVaultGcpOauth2AccessToken` Submodule <a name="`ephemeralVaultGcpOauth2AccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpOauth2AccessToken <a name="EphemeralVaultGcpOauth2AccessToken" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token vault_gcp_oauth2_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer"></a>

```typescript
import { ephemeralVaultGcpOauth2AccessToken } from '@cdktn/provider-vault'

new ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken(scope: Construct, id: string, config: EphemeralVaultGcpOauth2AccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig">EphemeralVaultGcpOauth2AccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig">EphemeralVaultGcpOauth2AccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount">resetImpersonatedAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset">resetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount">resetStaticAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetImpersonatedAccount` <a name="resetImpersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount"></a>

```typescript
public resetImpersonatedAccount(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRoleset` <a name="resetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset"></a>

```typescript
public resetRoleset(): void
```

##### `resetStaticAccount` <a name="resetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount"></a>

```typescript
public resetStaticAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct"></a>

```typescript
import { ephemeralVaultGcpOauth2AccessToken } from '@cdktn/provider-vault'

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement"></a>

```typescript
import { ephemeralVaultGcpOauth2AccessToken } from '@cdktn/provider-vault'

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultGcpOauth2AccessToken } from '@cdktn/provider-vault'

ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput">impersonatedAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput">rolesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput">staticAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount">impersonatedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset">roleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount">staticAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `impersonatedAccountInput`<sup>Optional</sup> <a name="impersonatedAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput"></a>

```typescript
public readonly impersonatedAccountInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `rolesetInput`<sup>Optional</sup> <a name="rolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput"></a>

```typescript
public readonly rolesetInput: string;
```

- *Type:* string

---

##### `staticAccountInput`<sup>Optional</sup> <a name="staticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput"></a>

```typescript
public readonly staticAccountInput: string;
```

- *Type:* string

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount"></a>

```typescript
public readonly impersonatedAccount: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset"></a>

```typescript
public readonly roleset: string;
```

- *Type:* string

---

##### `staticAccount`<sup>Required</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount"></a>

```typescript
public readonly staticAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpOauth2AccessTokenConfig <a name="EphemeralVaultGcpOauth2AccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.Initializer"></a>

```typescript
import { ephemeralVaultGcpOauth2AccessToken } from '@cdktn/provider-vault'

const ephemeralVaultGcpOauth2AccessTokenConfig: ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount">impersonatedAccount</a></code> | <code>string</code> | GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Maximum number of retries when the GCP service account or key is not yet ready. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset">roleset</a></code> | <code>string</code> | GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount">staticAccount</a></code> | <code>string</code> | GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}

---

##### `impersonatedAccount`<sup>Optional</sup> <a name="impersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount"></a>

```typescript
public readonly impersonatedAccount: string;
```

- *Type:* string

GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Maximum number of retries when the GCP service account or key is not yet ready.

Each retry waits 1 second. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset"></a>

```typescript
public readonly roleset: string;
```

- *Type:* string

GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}

---

##### `staticAccount`<sup>Optional</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount"></a>

```typescript
public readonly staticAccount: string;
```

- *Type:* string

GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}

---



