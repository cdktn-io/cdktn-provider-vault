# `ephemeralVaultAzureAccessCredentials` Submodule <a name="`ephemeralVaultAzureAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessCredentials <a name="EphemeralVaultAzureAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer"></a>

```typescript
import { ephemeralVaultAzureAccessCredentials } from '@cdktn/provider-vault'

new ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials(scope: Construct, id: string, config: EphemeralVaultAzureAccessCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig">EphemeralVaultAzureAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig">EphemeralVaultAzureAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds">resetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests">resetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses">resetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata">resetRequestMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds">resetValidateCreds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetMaxCredValidationSeconds` <a name="resetMaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```typescript
public resetMaxCredValidationSeconds(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNumSecondsBetweenTests` <a name="resetNumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```typescript
public resetNumSecondsBetweenTests(): void
```

##### `resetNumSequentialSuccesses` <a name="resetNumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```typescript
public resetNumSequentialSuccesses(): void
```

##### `resetRequestMetadata` <a name="resetRequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata"></a>

```typescript
public resetRequestMetadata(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetValidateCreds` <a name="resetValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds"></a>

```typescript
public resetValidateCreds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct"></a>

```typescript
import { ephemeralVaultAzureAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement"></a>

```typescript
import { ephemeralVaultAzureAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultAzureAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">maxCredValidationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">numSecondsBetweenTestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput">numSequentialSuccessesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput">requestMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput">validateCredsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata">requestMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds">validateCreds</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `maxCredValidationSecondsInput`<sup>Optional</sup> <a name="maxCredValidationSecondsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```typescript
public readonly maxCredValidationSecondsInput: number;
```

- *Type:* number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `numSecondsBetweenTestsInput`<sup>Optional</sup> <a name="numSecondsBetweenTestsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```typescript
public readonly numSecondsBetweenTestsInput: number;
```

- *Type:* number

---

##### `numSequentialSuccessesInput`<sup>Optional</sup> <a name="numSequentialSuccessesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```typescript
public readonly numSequentialSuccessesInput: number;
```

- *Type:* number

---

##### `requestMetadataInput`<sup>Optional</sup> <a name="requestMetadataInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput"></a>

```typescript
public readonly requestMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `validateCredsInput`<sup>Optional</sup> <a name="validateCredsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput"></a>

```typescript
public readonly validateCredsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `maxCredValidationSeconds`<sup>Required</sup> <a name="maxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```typescript
public readonly maxCredValidationSeconds: number;
```

- *Type:* number

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `numSecondsBetweenTests`<sup>Required</sup> <a name="numSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```typescript
public readonly numSecondsBetweenTests: number;
```

- *Type:* number

---

##### `numSequentialSuccesses`<sup>Required</sup> <a name="numSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```typescript
public readonly numSequentialSuccesses: number;
```

- *Type:* number

---

##### `requestMetadata`<sup>Required</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata"></a>

```typescript
public readonly requestMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `validateCreds`<sup>Required</sup> <a name="validateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds"></a>

```typescript
public readonly validateCreds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessCredentialsConfig <a name="EphemeralVaultAzureAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.Initializer"></a>

```typescript
import { ephemeralVaultAzureAccessCredentials } from '@cdktn/provider-vault'

const ephemeralVaultAzureAccessCredentialsConfig: ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend">backend</a></code> | <code>string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role">role</a></code> | <code>string</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment">environment</a></code> | <code>string</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>number</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>number</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>number</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata">requestMetadata</a></code> | <code>{[ key: string ]: string}</code> | Input metadata to send with the request to Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds">validateCreds</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#backend EphemeralVaultAzureAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#role EphemeralVaultAzureAccessCredentials#role}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#environment EphemeralVaultAzureAccessCredentials#environment}

---

##### `maxCredValidationSeconds`<sup>Optional</sup> <a name="maxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```typescript
public readonly maxCredValidationSeconds: number;
```

- *Type:* number

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#max_cred_validation_seconds EphemeralVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#mount_id EphemeralVaultAzureAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#namespace EphemeralVaultAzureAccessCredentials#namespace}

---

##### `numSecondsBetweenTests`<sup>Optional</sup> <a name="numSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```typescript
public readonly numSecondsBetweenTests: number;
```

- *Type:* number

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#num_seconds_between_tests EphemeralVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `numSequentialSuccesses`<sup>Optional</sup> <a name="numSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```typescript
public readonly numSequentialSuccesses: number;
```

- *Type:* number

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#num_sequential_successes EphemeralVaultAzureAccessCredentials#num_sequential_successes}

---

##### `requestMetadata`<sup>Optional</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata"></a>

```typescript
public readonly requestMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#request_metadata EphemeralVaultAzureAccessCredentials#request_metadata}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#subscription_id EphemeralVaultAzureAccessCredentials#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#tenant_id EphemeralVaultAzureAccessCredentials#tenant_id}

---

##### `validateCreds`<sup>Optional</sup> <a name="validateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```typescript
public readonly validateCreds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/azure_access_credentials#validate_creds EphemeralVaultAzureAccessCredentials#validate_creds}

---



