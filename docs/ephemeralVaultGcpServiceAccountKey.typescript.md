# `ephemeralVaultGcpServiceAccountKey` Submodule <a name="`ephemeralVaultGcpServiceAccountKey` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpServiceAccountKey <a name="EphemeralVaultGcpServiceAccountKey" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer"></a>

```typescript
import { ephemeralVaultGcpServiceAccountKey } from '@cdktn/provider-vault'

new ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey(scope: Construct, id: string, config: EphemeralVaultGcpServiceAccountKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig">EphemeralVaultGcpServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig">EphemeralVaultGcpServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset">resetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount">resetStaticAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRoleset` <a name="resetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset"></a>

```typescript
public resetRoleset(): void
```

##### `resetStaticAccount` <a name="resetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount"></a>

```typescript
public resetStaticAccount(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct"></a>

```typescript
import { ephemeralVaultGcpServiceAccountKey } from '@cdktn/provider-vault'

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement"></a>

```typescript
import { ephemeralVaultGcpServiceAccountKey } from '@cdktn/provider-vault'

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultGcpServiceAccountKey } from '@cdktn/provider-vault'

ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData">privateKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput">rolesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput">staticAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset">roleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount">staticAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `privateKeyData`<sup>Required</sup> <a name="privateKeyData" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData"></a>

```typescript
public readonly privateKeyData: string;
```

- *Type:* string

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `rolesetInput`<sup>Optional</sup> <a name="rolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput"></a>

```typescript
public readonly rolesetInput: string;
```

- *Type:* string

---

##### `staticAccountInput`<sup>Optional</sup> <a name="staticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput"></a>

```typescript
public readonly staticAccountInput: string;
```

- *Type:* string

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset"></a>

```typescript
public readonly roleset: string;
```

- *Type:* string

---

##### `staticAccount`<sup>Required</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount"></a>

```typescript
public readonly staticAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpServiceAccountKeyConfig <a name="EphemeralVaultGcpServiceAccountKeyConfig" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.Initializer"></a>

```typescript
import { ephemeralVaultGcpServiceAccountKey } from '@cdktn/provider-vault'

const ephemeralVaultGcpServiceAccountKeyConfig: ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType">keyType</a></code> | <code>string</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset">roleset</a></code> | <code>string</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount">staticAccount</a></code> | <code>string</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset"></a>

```typescript
public readonly roleset: string;
```

- *Type:* string

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `staticAccount`<sup>Optional</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount"></a>

```typescript
public readonly staticAccount: string;
```

- *Type:* string

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---



