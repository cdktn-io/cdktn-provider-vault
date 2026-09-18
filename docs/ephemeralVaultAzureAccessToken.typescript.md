# `ephemeralVaultAzureAccessToken` Submodule <a name="`ephemeralVaultAzureAccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessToken <a name="EphemeralVaultAzureAccessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token vault_azure_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer"></a>

```typescript
import { ephemeralVaultAzureAccessToken } from '@cdktn/provider-vault'

new ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken(scope: Construct, id: string, config: EphemeralVaultAzureAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig">EphemeralVaultAzureAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig">EphemeralVaultAzureAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay">resetRetryDelay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRetryDelay` <a name="resetRetryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay"></a>

```typescript
public resetRetryDelay(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct"></a>

```typescript
import { ephemeralVaultAzureAccessToken } from '@cdktn/provider-vault'

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement"></a>

```typescript
import { ephemeralVaultAzureAccessToken } from '@cdktn/provider-vault'

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultAzureAccessToken } from '@cdktn/provider-vault'

ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn">expiresIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn">extExpiresIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput">retryDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay">retryDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `expiresIn`<sup>Required</sup> <a name="expiresIn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn"></a>

```typescript
public readonly expiresIn: number;
```

- *Type:* number

---

##### `extExpiresIn`<sup>Required</sup> <a name="extExpiresIn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn"></a>

```typescript
public readonly extExpiresIn: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `retryDelayInput`<sup>Optional</sup> <a name="retryDelayInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput"></a>

```typescript
public readonly retryDelayInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessTokenConfig <a name="EphemeralVaultAzureAccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.Initializer"></a>

```typescript
import { ephemeralVaultAzureAccessToken } from '@cdktn/provider-vault'

const ephemeralVaultAzureAccessTokenConfig: ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the Azure secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role">role</a></code> | <code>string</code> | Static role name to fetch an access token for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope">scope</a></code> | <code>string</code> | The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default"). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay">retryDelay</a></code> | <code>number</code> | Number of seconds to wait between propagation retries. Defaults to 4. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the Azure secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Static role name to fetch an access token for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

Number of seconds to wait between propagation retries. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}

---



