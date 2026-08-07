# `ephemeralVaultSpiffeSecretBackendMintjwt` Submodule <a name="`ephemeralVaultSpiffeSecretBackendMintjwt` Submodule" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwt <a name="EphemeralVaultSpiffeSecretBackendMintjwt" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt vault_spiffe_secret_backend_mintjwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer"></a>

```typescript
import { ephemeralVaultSpiffeSecretBackendMintjwt } from '@cdktn/provider-vault'

new ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt(scope: Construct, id: string, config: EphemeralVaultSpiffeSecretBackendMintjwtConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig">EphemeralVaultSpiffeSecretBackendMintjwtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig">EphemeralVaultSpiffeSecretBackendMintjwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct"></a>

```typescript
import { ephemeralVaultSpiffeSecretBackendMintjwt } from '@cdktn/provider-vault'

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement"></a>

```typescript
import { ephemeralVaultSpiffeSecretBackendMintjwt } from '@cdktn/provider-vault'

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultSpiffeSecretBackendMintjwt } from '@cdktn/provider-vault'

ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwtConfig <a name="EphemeralVaultSpiffeSecretBackendMintjwtConfig" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.Initializer"></a>

```typescript
import { ephemeralVaultSpiffeSecretBackendMintjwt } from '@cdktn/provider-vault'

const ephemeralVaultSpiffeSecretBackendMintjwtConfig: ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience">audience</a></code> | <code>string</code> | The audience claim to use. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name">name</a></code> | <code>string</code> | Name of the SPIFFE role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

The audience claim to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#audience EphemeralVaultSpiffeSecretBackendMintjwt#audience}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount EphemeralVaultSpiffeSecretBackendMintjwt#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the SPIFFE role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#name EphemeralVaultSpiffeSecretBackendMintjwt#name}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount_id EphemeralVaultSpiffeSecretBackendMintjwt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#namespace EphemeralVaultSpiffeSecretBackendMintjwt#namespace}

---



