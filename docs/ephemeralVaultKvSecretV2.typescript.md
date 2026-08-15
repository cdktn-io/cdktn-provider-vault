# `ephemeralVaultKvSecretV2` Submodule <a name="`ephemeralVaultKvSecretV2` Submodule" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKvSecretV2 <a name="EphemeralVaultKvSecretV2" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kv_secret_v2 vault_kv_secret_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer"></a>

```typescript
import { ephemeralVaultKvSecretV2 } from '@cdktn/provider-vault'

new ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2(scope: Construct, id: string, config: EphemeralVaultKvSecretV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config">EphemeralVaultKvSecretV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config">EphemeralVaultKvSecretV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isConstruct"></a>

```typescript
import { ephemeralVaultKvSecretV2 } from '@cdktn/provider-vault'

ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformElement"></a>

```typescript
import { ephemeralVaultKvSecretV2 } from '@cdktn/provider-vault'

ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultKvSecretV2 } from '@cdktn/provider-vault'

ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.customMetadata">customMetadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.data">data</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.dataJson">dataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.deletionTime">deletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.destroyed">destroyed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.customMetadata"></a>

```typescript
public readonly customMetadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.data"></a>

```typescript
public readonly data: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.deletionTime"></a>

```typescript
public readonly deletionTime: string;
```

- *Type:* string

---

##### `destroyed`<sup>Required</sup> <a name="destroyed" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.destroyed"></a>

```typescript
public readonly destroyed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKvSecretV2Config <a name="EphemeralVaultKvSecretV2Config" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.Initializer"></a>

```typescript
import { ephemeralVaultKvSecretV2 } from '@cdktn/provider-vault'

const ephemeralVaultKvSecretV2Config: ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.mount">mount</a></code> | <code>string</code> | Mount path for the KVV2 engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.name">name</a></code> | <code>string</code> | Full name of the secret. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.version">version</a></code> | <code>number</code> | Version of the secret to retrieve. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the KVV2 engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kv_secret_v2#mount EphemeralVaultKvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kv_secret_v2#name EphemeralVaultKvSecretV2#name}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kv_secret_v2#mount_id EphemeralVaultKvSecretV2#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kv_secret_v2#namespace EphemeralVaultKvSecretV2#namespace}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-vault.ephemeralVaultKvSecretV2.EphemeralVaultKvSecretV2Config.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Version of the secret to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kv_secret_v2#version EphemeralVaultKvSecretV2#version}

---



