# `ephemeralVaultPkiSecretBackendCaKeyExport` Submodule <a name="`ephemeralVaultPkiSecretBackendCaKeyExport` Submodule" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExport <a name="EphemeralVaultPkiSecretBackendCaKeyExport" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer"></a>

```typescript
import { ephemeralVaultPkiSecretBackendCaKeyExport } from '@cdktn/provider-vault'

new ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport(scope: Construct, id: string, config: EphemeralVaultPkiSecretBackendCaKeyExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig">EphemeralVaultPkiSecretBackendCaKeyExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig">EphemeralVaultPkiSecretBackendCaKeyExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct"></a>

```typescript
import { ephemeralVaultPkiSecretBackendCaKeyExport } from '@cdktn/provider-vault'

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement"></a>

```typescript
import { ephemeralVaultPkiSecretBackendCaKeyExport } from '@cdktn/provider-vault'

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultPkiSecretBackendCaKeyExport } from '@cdktn/provider-vault'

ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt">exportedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac">exportKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey">wrappedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput">caKeyUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid">caKeyUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `exportedAt`<sup>Required</sup> <a name="exportedAt" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportedAt"></a>

```typescript
public readonly exportedAt: string;
```

- *Type:* string

---

##### `exportKeyHmac`<sup>Required</sup> <a name="exportKeyHmac" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.exportKeyHmac"></a>

```typescript
public readonly exportKeyHmac: string;
```

- *Type:* string

---

##### `wrappedKey`<sup>Required</sup> <a name="wrappedKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.wrappedKey"></a>

```typescript
public readonly wrappedKey: string;
```

- *Type:* string

---

##### `caKeyUuidInput`<sup>Optional</sup> <a name="caKeyUuidInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuidInput"></a>

```typescript
public readonly caKeyUuidInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `caKeyUuid`<sup>Required</sup> <a name="caKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.caKeyUuid"></a>

```typescript
public readonly caKeyUuid: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultPkiSecretBackendCaKeyExportConfig <a name="EphemeralVaultPkiSecretBackendCaKeyExportConfig" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.Initializer"></a>

```typescript
import { ephemeralVaultPkiSecretBackendCaKeyExport } from '@cdktn/provider-vault'

const ephemeralVaultPkiSecretBackendCaKeyExportConfig: ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid">caKeyUuid</a></code> | <code>string</code> | UUID of the CA key to export from the source mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount">mount</a></code> | <code>string</code> | Path of the source PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey">publicKey</a></code> | <code>string</code> | PEM-encoded public key of the destination wrapping keypair. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `caKeyUuid`<sup>Required</sup> <a name="caKeyUuid" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.caKeyUuid"></a>

```typescript
public readonly caKeyUuid: string;
```

- *Type:* string

UUID of the CA key to export from the source mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the source PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

PEM-encoded public key of the destination wrapping keypair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultPkiSecretBackendCaKeyExport.EphemeralVaultPkiSecretBackendCaKeyExportConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}

---



