# `ephemeralVaultAlicloudAccessCredentials` Submodule <a name="`ephemeralVaultAlicloudAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAlicloudAccessCredentials <a name="EphemeralVaultAlicloudAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials vault_alicloud_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer"></a>

```typescript
import { ephemeralVaultAlicloudAccessCredentials } from '@cdktn/provider-vault'

new ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials(scope: Construct, id: string, config: EphemeralVaultAlicloudAccessCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig">EphemeralVaultAlicloudAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig">EphemeralVaultAlicloudAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct"></a>

```typescript
import { ephemeralVaultAlicloudAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement"></a>

```typescript
import { ephemeralVaultAlicloudAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultAlicloudAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.securityToken">securityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `securityToken`<sup>Required</sup> <a name="securityToken" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAlicloudAccessCredentialsConfig <a name="EphemeralVaultAlicloudAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.Initializer"></a>

```typescript
import { ephemeralVaultAlicloudAccessCredentials } from '@cdktn/provider-vault'

const ephemeralVaultAlicloudAccessCredentialsConfig: ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the AliCloud secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.role">role</a></code> | <code>string</code> | AliCloud Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the AliCloud secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#mount EphemeralVaultAlicloudAccessCredentials#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

AliCloud Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#role EphemeralVaultAlicloudAccessCredentials#role}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#mount_id EphemeralVaultAlicloudAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAlicloudAccessCredentials.EphemeralVaultAlicloudAccessCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/alicloud_access_credentials#namespace EphemeralVaultAlicloudAccessCredentials#namespace}

---



