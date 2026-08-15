# `ephemeralVaultGcpkmsEncrypt` Submodule <a name="`ephemeralVaultGcpkmsEncrypt` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpkmsEncrypt <a name="EphemeralVaultGcpkmsEncrypt" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt vault_gcpkms_encrypt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer"></a>

```typescript
import { ephemeralVaultGcpkmsEncrypt } from '@cdktn/provider-vault'

new ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt(scope: Construct, id: string, config: EphemeralVaultGcpkmsEncryptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig">EphemeralVaultGcpkmsEncryptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig">EphemeralVaultGcpkmsEncryptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetAdditionalAuthenticatedData">resetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdditionalAuthenticatedData` <a name="resetAdditionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetAdditionalAuthenticatedData"></a>

```typescript
public resetAdditionalAuthenticatedData(): void
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct"></a>

```typescript
import { ephemeralVaultGcpkmsEncrypt } from '@cdktn/provider-vault'

ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement"></a>

```typescript
import { ephemeralVaultGcpkmsEncrypt } from '@cdktn/provider-vault'

ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultGcpkmsEncrypt } from '@cdktn/provider-vault'

ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionReturned">keyVersionReturned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedDataInput">additionalAuthenticatedDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionInput">keyVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintextInput">plaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersion">keyVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `keyVersionReturned`<sup>Required</sup> <a name="keyVersionReturned" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionReturned"></a>

```typescript
public readonly keyVersionReturned: string;
```

- *Type:* string

---

##### `additionalAuthenticatedDataInput`<sup>Optional</sup> <a name="additionalAuthenticatedDataInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedDataInput"></a>

```typescript
public readonly additionalAuthenticatedDataInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: number;
```

- *Type:* number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintextInput"></a>

```typescript
public readonly plaintextInput: string;
```

- *Type:* string

---

##### `additionalAuthenticatedData`<sup>Required</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.additionalAuthenticatedData"></a>

```typescript
public readonly additionalAuthenticatedData: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncrypt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpkmsEncryptConfig <a name="EphemeralVaultGcpkmsEncryptConfig" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.Initializer"></a>

```typescript
import { ephemeralVaultGcpkmsEncrypt } from '@cdktn/provider-vault'

const ephemeralVaultGcpkmsEncryptConfig: ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyName">keyName</a></code> | <code>string</code> | Name of the Vault key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mount">mount</a></code> | <code>string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.plaintext">plaintext</a></code> | <code>string</code> | Base64-encoded plaintext to encrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>string</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyVersion">keyVersion</a></code> | <code>number</code> | Version of the key to use for encryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Name of the Vault key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_name EphemeralVaultGcpkmsEncrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount EphemeralVaultGcpkmsEncrypt#mount}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

Base64-encoded plaintext to encrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#plaintext EphemeralVaultGcpkmsEncrypt#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.additionalAuthenticatedData"></a>

```typescript
public readonly additionalAuthenticatedData: string;
```

- *Type:* string

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#additional_authenticated_data EphemeralVaultGcpkmsEncrypt#additional_authenticated_data}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

Version of the key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#key_version EphemeralVaultGcpkmsEncrypt#key_version}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#mount_id EphemeralVaultGcpkmsEncrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsEncrypt.EphemeralVaultGcpkmsEncryptConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_encrypt#namespace EphemeralVaultGcpkmsEncrypt#namespace}

---



