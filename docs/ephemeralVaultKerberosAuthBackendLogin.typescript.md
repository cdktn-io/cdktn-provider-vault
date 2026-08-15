# `ephemeralVaultKerberosAuthBackendLogin` Submodule <a name="`ephemeralVaultKerberosAuthBackendLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKerberosAuthBackendLogin <a name="EphemeralVaultKerberosAuthBackendLogin" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login vault_kerberos_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer"></a>

```typescript
import { ephemeralVaultKerberosAuthBackendLogin } from '@cdktn/provider-vault'

new ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin(scope: Construct, id: string, config: EphemeralVaultKerberosAuthBackendLoginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig">EphemeralVaultKerberosAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig">EphemeralVaultKerberosAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation">resetDisableFastNegotiation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName">resetRemoveInstanceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisableFastNegotiation` <a name="resetDisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation"></a>

```typescript
public resetDisableFastNegotiation(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRemoveInstanceName` <a name="resetRemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName"></a>

```typescript
public resetRemoveInstanceName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct"></a>

```typescript
import { ephemeralVaultKerberosAuthBackendLogin } from '@cdktn/provider-vault'

ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement"></a>

```typescript
import { ephemeralVaultKerberosAuthBackendLogin } from '@cdktn/provider-vault'

ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultKerberosAuthBackendLogin } from '@cdktn/provider-vault'

ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies">identityPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan">orphan</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput">disableFastNegotiationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput">keytabPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput">krb5ConfPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput">realmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput">removeInstanceNameInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation">disableFastNegotiation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath">keytabPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath">krb5ConfPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName">removeInstanceName</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `identityPolicies`<sup>Required</sup> <a name="identityPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies"></a>

```typescript
public readonly identityPolicies: string[];
```

- *Type:* string[]

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan"></a>

```typescript
public readonly orphan: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable"></a>

```typescript
public readonly renewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `disableFastNegotiationInput`<sup>Optional</sup> <a name="disableFastNegotiationInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput"></a>

```typescript
public readonly disableFastNegotiationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keytabPathInput`<sup>Optional</sup> <a name="keytabPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput"></a>

```typescript
public readonly keytabPathInput: string;
```

- *Type:* string

---

##### `krb5ConfPathInput`<sup>Optional</sup> <a name="krb5ConfPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput"></a>

```typescript
public readonly krb5ConfPathInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput"></a>

```typescript
public readonly realmInput: string;
```

- *Type:* string

---

##### `removeInstanceNameInput`<sup>Optional</sup> <a name="removeInstanceNameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput"></a>

```typescript
public readonly removeInstanceNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `disableFastNegotiation`<sup>Required</sup> <a name="disableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation"></a>

```typescript
public readonly disableFastNegotiation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keytabPath`<sup>Required</sup> <a name="keytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath"></a>

```typescript
public readonly keytabPath: string;
```

- *Type:* string

---

##### `krb5ConfPath`<sup>Required</sup> <a name="krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath"></a>

```typescript
public readonly krb5ConfPath: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `removeInstanceName`<sup>Required</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName"></a>

```typescript
public readonly removeInstanceName: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKerberosAuthBackendLoginConfig <a name="EphemeralVaultKerberosAuthBackendLoginConfig" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.Initializer"></a>

```typescript
import { ephemeralVaultKerberosAuthBackendLogin } from '@cdktn/provider-vault'

const ephemeralVaultKerberosAuthBackendLoginConfig: ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath">keytabPath</a></code> | <code>string</code> | Path to the keytab file for authentication. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath">krb5ConfPath</a></code> | <code>string</code> | Path to the krb5.conf configuration file. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount">mount</a></code> | <code>string</code> | Path where the Kerberos auth method is mounted. Defaults to 'kerberos'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm">realm</a></code> | <code>string</code> | Kerberos realm name. Must match the UPNDomain in LDAP config. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service">service</a></code> | <code>string</code> | Service principal name for obtaining a service ticket. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username">username</a></code> | <code>string</code> | Username for the keytab entry. Must match a service account in LDAP. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation">disableFastNegotiation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable FAST negotiation. Default: false. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName">removeInstanceName</a></code> | <code>boolean \| cdktn.IResolvable</code> | Remove instance name from principal. Default: false. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `keytabPath`<sup>Required</sup> <a name="keytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath"></a>

```typescript
public readonly keytabPath: string;
```

- *Type:* string

Path to the keytab file for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#keytab_path EphemeralVaultKerberosAuthBackendLogin#keytab_path}

---

##### `krb5ConfPath`<sup>Required</sup> <a name="krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath"></a>

```typescript
public readonly krb5ConfPath: string;
```

- *Type:* string

Path to the krb5.conf configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#krb5conf_path EphemeralVaultKerberosAuthBackendLogin#krb5conf_path}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the Kerberos auth method is mounted. Defaults to 'kerberos'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount EphemeralVaultKerberosAuthBackendLogin#mount}

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Kerberos realm name. Must match the UPNDomain in LDAP config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#realm EphemeralVaultKerberosAuthBackendLogin#realm}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service principal name for obtaining a service ticket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#service EphemeralVaultKerberosAuthBackendLogin#service}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the keytab entry. Must match a service account in LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#username EphemeralVaultKerberosAuthBackendLogin#username}

---

##### `disableFastNegotiation`<sup>Optional</sup> <a name="disableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation"></a>

```typescript
public readonly disableFastNegotiation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable FAST negotiation. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#disable_fast_negotiation EphemeralVaultKerberosAuthBackendLogin#disable_fast_negotiation}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount_id EphemeralVaultKerberosAuthBackendLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#namespace EphemeralVaultKerberosAuthBackendLogin#namespace}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName"></a>

```typescript
public readonly removeInstanceName: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Remove instance name from principal. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#remove_instance_name EphemeralVaultKerberosAuthBackendLogin#remove_instance_name}

---



