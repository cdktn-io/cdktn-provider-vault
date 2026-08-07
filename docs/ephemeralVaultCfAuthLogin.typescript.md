# `ephemeralVaultCfAuthLogin` Submodule <a name="`ephemeralVaultCfAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultCfAuthLogin <a name="EphemeralVaultCfAuthLogin" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login vault_cf_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer"></a>

```typescript
import { ephemeralVaultCfAuthLogin } from '@cdktn/provider-vault'

new ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin(scope: Construct, id: string, config: EphemeralVaultCfAuthLoginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig">EphemeralVaultCfAuthLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig">EphemeralVaultCfAuthLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMount` <a name="resetMount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount"></a>

```typescript
public resetMount(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct"></a>

```typescript
import { ephemeralVaultCfAuthLogin } from '@cdktn/provider-vault'

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement"></a>

```typescript
import { ephemeralVaultCfAuthLogin } from '@cdktn/provider-vault'

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultCfAuthLogin } from '@cdktn/provider-vault'

ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput">cfInstanceCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput">signingTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert">cfInstanceCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime">signingTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable"></a>

```typescript
public readonly renewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cfInstanceCertInput`<sup>Optional</sup> <a name="cfInstanceCertInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput"></a>

```typescript
public readonly cfInstanceCertInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `signingTimeInput`<sup>Optional</sup> <a name="signingTimeInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput"></a>

```typescript
public readonly signingTimeInput: string;
```

- *Type:* string

---

##### `cfInstanceCert`<sup>Required</sup> <a name="cfInstanceCert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert"></a>

```typescript
public readonly cfInstanceCert: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `signingTime`<sup>Required</sup> <a name="signingTime" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime"></a>

```typescript
public readonly signingTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultCfAuthLoginConfig <a name="EphemeralVaultCfAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.Initializer"></a>

```typescript
import { ephemeralVaultCfAuthLogin } from '@cdktn/provider-vault'

const ephemeralVaultCfAuthLoginConfig: ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert">cfInstanceCert</a></code> | <code>string</code> | The full body of the file available at the path denoted by `CF_INSTANCE_CERT`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role">role</a></code> | <code>string</code> | Name of the CF auth role to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature">signature</a></code> | <code>string</code> | The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime">signingTime</a></code> | <code>string</code> | The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cfInstanceCert`<sup>Required</sup> <a name="cfInstanceCert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert"></a>

```typescript
public readonly cfInstanceCert: string;
```

- *Type:* string

The full body of the file available at the path denoted by `CF_INSTANCE_CERT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#cf_instance_cert EphemeralVaultCfAuthLogin#cf_instance_cert}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the CF auth role to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#role EphemeralVaultCfAuthLogin#role}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#signature EphemeralVaultCfAuthLogin#signature}

---

##### `signingTime`<sup>Required</sup> <a name="signingTime" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime"></a>

```typescript
public readonly signingTime: string;
```

- *Type:* string

The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#signing_time EphemeralVaultCfAuthLogin#signing_time}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#mount EphemeralVaultCfAuthLogin#mount}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#mount_id EphemeralVaultCfAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#namespace EphemeralVaultCfAuthLogin#namespace}

---



