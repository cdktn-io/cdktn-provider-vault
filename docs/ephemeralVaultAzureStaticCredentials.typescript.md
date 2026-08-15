# `ephemeralVaultAzureStaticCredentials` Submodule <a name="`ephemeralVaultAzureStaticCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureStaticCredentials <a name="EphemeralVaultAzureStaticCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials vault_azure_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer"></a>

```typescript
import { ephemeralVaultAzureStaticCredentials } from '@cdktn/provider-vault'

new ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials(scope: Construct, id: string, config: EphemeralVaultAzureStaticCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig">EphemeralVaultAzureStaticCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig">EphemeralVaultAzureStaticCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetRequestMetadata">resetRequestMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRequestMetadata` <a name="resetRequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetRequestMetadata"></a>

```typescript
public resetRequestMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct"></a>

```typescript
import { ephemeralVaultAzureStaticCredentials } from '@cdktn/provider-vault'

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement"></a>

```typescript
import { ephemeralVaultAzureStaticCredentials } from '@cdktn/provider-vault'

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultAzureStaticCredentials } from '@cdktn/provider-vault'

ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadataInput">requestMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadata">requestMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `requestMetadataInput`<sup>Optional</sup> <a name="requestMetadataInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadataInput"></a>

```typescript
public readonly requestMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `requestMetadata`<sup>Required</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadata"></a>

```typescript
public readonly requestMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureStaticCredentialsConfig <a name="EphemeralVaultAzureStaticCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.Initializer"></a>

```typescript
import { ephemeralVaultAzureStaticCredentials } from '@cdktn/provider-vault'

const ephemeralVaultAzureStaticCredentialsConfig: ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.backend">backend</a></code> | <code>string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.role">role</a></code> | <code>string</code> | Static role name to fetch credentials for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.requestMetadata">requestMetadata</a></code> | <code>{[ key: string ]: string}</code> | Input metadata to send with the request to Vault. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#backend EphemeralVaultAzureStaticCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Static role name to fetch credentials for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#role EphemeralVaultAzureStaticCredentials#role}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#mount_id EphemeralVaultAzureStaticCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#namespace EphemeralVaultAzureStaticCredentials#namespace}

---

##### `requestMetadata`<sup>Optional</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.requestMetadata"></a>

```typescript
public readonly requestMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_static_credentials#request_metadata EphemeralVaultAzureStaticCredentials#request_metadata}

---



